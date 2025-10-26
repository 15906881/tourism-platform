import os
import asyncpg
import asyncio
from datetime import datetime, timedelta
import boto3
import json

# SES for sending emails
ses = boto3.client('ses', region_name=os.getenv('AWS_REGION', 'us-east-1'))

async def get_bookings_needing_reminders():
    """Get bookings that need 24-hour reminders"""
    database_url = os.getenv('DATABASE_URL')
    if not database_url:
        raise Exception("DATABASE_URL environment variable required")
    
    conn = await asyncpg.connect(database_url)
    try:
        # Find bookings starting in 24-25 hours that haven't been reminded
        reminder_window_start = datetime.utcnow() + timedelta(hours=24)
        reminder_window_end = datetime.utcnow() + timedelta(hours=25)
        
        bookings = await conn.fetch('''
            SELECT 
                b.booking_id, b.customer_email, b.customer_name,
                b.starts_at, s.name as service_name,
                b.cancel_token, b.reschedule_token
            FROM bookings b
            JOIN services s ON b.service_id = s.id
            WHERE b.starts_at BETWEEN $1 AND $2
            AND b.status = 'CONFIRMED'
            AND b.reminder_sent_at IS NULL
        ''', reminder_window_start, reminder_window_end)
        
        return [dict(booking) for booking in bookings]
    finally:
        await conn.close()

async def send_reminder_email(booking):
    """Send reminder email for a booking"""
    try:
        subject = f"Reminder: Your {booking['service_name']} booking is tomorrow"
        
        html_body = f"""
        <html>
        <body>
            <h2>Booking Reminder</h2>
            <p>Dear {booking['customer_name']},</p>
            <p>This is a friendly reminder about your upcoming booking tomorrow.</p>
            <p><strong>Service:</strong> {booking['service_name']}</p>
            <p><strong>Date & Time:</strong> {booking['starts_at']}</p>
            <p><strong>Booking ID:</strong> {booking['booking_id']}</p>
            <br>
            <p>To cancel your booking, use this token: {booking['cancel_token']}</p>
            <p>To reschedule, use this token: {booking['reschedule_token']}</p>
            <br>
            <p>We look forward to seeing you!</p>
        </body>
        </html>
        """
        
        ses.send_email(
            Source=os.getenv('SES_FROM', 'Bookings <noreply@yourdomain.com>'),
            Destination={'ToAddresses': [booking['customer_email']]},
            Message={
                'Subject': {'Data': subject},
                'Body': {'Html': {'Data': html_body}}
            }
        )
        return True
    except Exception as e:
        print(f"Failed to send reminder for {booking['booking_id']}: {e}")
        return False

async def mark_reminder_sent(booking_id):
    """Mark reminder as sent in database"""
    database_url = os.getenv('DATABASE_URL')
    conn = await asyncpg.connect(database_url)
    try:
        await conn.execute('''
            UPDATE bookings 
            SET reminder_sent_at = NOW() 
            WHERE booking_id = $1
        ''', booking_id)
    finally:
        await conn.close()

def lambda_handler(event, context):
    """Lambda entry point"""
    try:
        # Run async functions
        loop = asyncio.get_event_loop()
        bookings = loop.run_until_complete(get_bookings_needing_reminders())
        
        print(f"Found {len(bookings)} bookings needing reminders")
        
        results = []
        for booking in bookings:
            try:
                # Send reminder
                success = loop.run_until_complete(send_reminder_email(booking))
                if success:
                    # Mark as sent
                    loop.run_until_complete(mark_reminder_sent(booking['booking_id']))
                    results.append({
                        'booking_id': booking['booking_id'],
                        'status': 'reminder_sent'
                    })
                else:
                    results.append({
                        'booking_id': booking['booking_id'],
                        'status': 'failed'
                    })
            except Exception as e:
                print(f"Error processing booking {booking['booking_id']}: {e}")
                results.append({
                    'booking_id': booking['booking_id'],
                    'status': 'error',
                    'error': str(e)
                })
        
        return {
            'statusCode': 200,
            'body': json.dumps({
                'processed': len(results),
                'results': results
            })
        }
        
    except Exception as e:
        print(f"Lambda error: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }

# For local testing
if __name__ == "__main__":
    # Set test environment
    os.environ['DATABASE_URL'] = 'postgresql://sadeshibeshi@localhost:5432/booking_system'
    os.environ['SES_FROM'] = 'Bookings <noreply@yourdomain.com>'
    
    result = lambda_handler({}, None)
    print(json.dumps(result, indent=2))
