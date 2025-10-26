import os
import asyncio
from datetime import datetime
import time

# Try to import boto3, but don't fail if not configured
try:
    import boto3
    # SES client - will fail if AWS credentials aren't configured
    _ses = boto3.client("ses", region_name=os.getenv("SES_REGION", "us-east-1"))
    SES_AVAILABLE = True
except Exception as e:
    print(f"SES not available: {e}")
    SES_AVAILABLE = False

FROM = os.getenv("SES_FROM", "Bookings <noreply@example.com>")
BCC = [os.getenv("SES_BCC_ALERTS")] if os.getenv("SES_BCC_ALERTS") else []

# Email retry tracking
_email_retries = {}

async def send_mail_with_retry(to: str, subject: str, html: str, text: str = None, max_retries: int = 3):
    """Send email with retry logic and suppression after max retries"""
    email_key = f"{to}:{subject}"
    
    # Check if we've exceeded retry limit
    if email_key in _email_retries and _email_retries[email_key] >= max_retries:
        print(f"📧 Email suppressed after {max_retries} failures: {subject} to {to}")
        return False
        
    if not SES_AVAILABLE:
        print(f"📧 Email would be sent to {to}: {subject}")
        return True
        
    try:
        response = _ses.send_email(
            Source=FROM,
            Destination={"ToAddresses": [to], "BccAddresses": BCC},
            Message={
                "Subject": {"Data": subject},
                "Body": {
                    "Html": {"Data": html},
                    "Text": {"Data": text or html.replace("<br>", "\n").replace("<p>", "\n").replace("</p>", "\n")}
                }
            }
        )
        print(f"📧 Email sent to {to}: {response['MessageId']}")
        # Reset retry counter on success
        _email_retries.pop(email_key, None)
        return True
    except Exception as e:
        # Increment retry counter
        _email_retries[email_key] = _email_retries.get(email_key, 0) + 1
        retry_count = _email_retries[email_key]
        
        if retry_count >= max_retries:
            print(f"❌ Email failed permanently after {max_retries} attempts to {to}: {e}")
        else:
            print(f"⚠️ Email failed (attempt {retry_count}/{max_retries}) to {to}: {e}")
            
        return False

def send_mail(to: str, subject: str, html: str, text: str = None):
    """Synchronous wrapper for email sending with retry"""
    asyncio.create_task(send_mail_with_retry(to, subject, html, text))
    return True

# Keep existing email functions but they'll use the enhanced send_mail
def send_booking_confirmation(booking_data: dict):
    """Send booking confirmation email"""
    subject = "Your booking is confirmed"
    html = f"""
    <html>
    <body>
        <h2>Booking Confirmed!</h2>
        <p>Dear {booking_data['customer_name']},</p>
        <p>Your booking has been confirmed.</p>
        <p><strong>Service:</strong> {booking_data.get('service_name', 'Massage Therapy')}</p>
        <p><strong>Date & Time:</strong> {booking_data['starts_at']}</p>
        <p><strong>Booking ID:</strong> {booking_data['booking_id']}</p>
        <br>
        <p>To cancel your booking, use this token: {booking_data['cancel_token']}</p>
        <p>To reschedule, use this token: {booking_data['reschedule_token']}</p>
        <br>
        <p>Thank you for choosing our service!</p>
    </body>
    </html>
    """
    return send_mail(booking_data['customer_email'], subject, html)

def send_booking_cancellation(booking_data: dict):
    """Send booking cancellation email"""
    subject = "Booking cancelled"
    html = f"""
    <html>
    <body>
        <h2>Booking Cancelled</h2>
        <p>Dear {booking_data['customer_name']},</p>
        <p>Your booking has been cancelled.</p>
        <p><strong>Service:</strong> {booking_data.get('service_name', 'Massage Therapy')}</p>
        <p><strong>Date & Time:</strong> {booking_data['starts_at']}</p>
        <p><strong>Booking ID:</strong> {booking_data['booking_id']}</p>
        <br>
        <p>We hope to serve you again in the future.</p>
    </body>
    </html>
    """
    return send_mail(booking_data['customer_email'], subject, html)

def send_booking_reschedule(booking_data: dict):
    """Send booking reschedule email"""
    subject = "Booking rescheduled"
    html = f"""
    <html>
    <body>
        <h2>Booking Rescheduled</h2>
        <p>Dear {booking_data['customer_name']},</p>
        <p>Your booking has been rescheduled.</p>
        <p><strong>Service:</strong> {booking_data.get('service_name', 'Massage Therapy')}</p>
        <p><strong>New Date & Time:</strong> {booking_data['new_starts_at']}</p>
        <p><strong>Previous Time:</strong> {booking_data.get('old_starts_at', 'N/A')}</p>
        <p><strong>Booking ID:</strong> {booking_data['booking_id']}</p>
        <br>
        <p>Your new cancellation token: {booking_data['cancel_token']}</p>
        <p>Your new reschedule token: {booking_data['reschedule_token']}</p>
    </body>
    </html>
    """
    return send_mail(booking_data['customer_email'], subject, html)

def send_booking_reminder(booking_data: dict):
    """Send 24-hour reminder email"""
    subject = "Reminder: Your booking is tomorrow"
    html = f"""
    <html>
    <body>
        <h2>Booking Reminder</h2>
        <p>Dear {booking_data['customer_name']},</p>
        <p>This is a friendly reminder about your upcoming booking.</p>
        <p><strong>Service:</strong> {booking_data.get('service_name', 'Massage Therapy')}</p>
        <p><strong>Date & Time:</strong> {booking_data['starts_at']}</p>
        <p><strong>Booking ID:</strong> {booking_data['booking_id']}</p>
        <br>
        <p>To cancel your booking, use this token: {booking_data['cancel_token']}</p>
        <p>To reschedule, use this token: {booking_data['reschedule_token']}</p>
        <br>
        <p>We look forward to seeing you!</p>
    </body>
    </html>
    """
    return send_mail(booking_data['customer_email'], subject, html)
