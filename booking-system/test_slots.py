import asyncio
import asyncpg
from datetime import datetime, timedelta, time, timezone
import pytz
import json

DAY_KEY = {0: 'mon', 1: 'tue', 2: 'wed', 3: 'thu', 4: 'fri', 5: 'sat', 6: 'sun'}

def _parse_hhmm(s: str) -> time:
    return datetime.strptime(s, '%H:%M').time()

def _to_tz(dt_naive_date: datetime, t: time, tz):
    local = tz.localize(datetime.combine(dt_naive_date.date(), t), is_dst=None)
    return tz.normalize(local)

def generate_time_slots(opening_hours: dict, duration_mins: int, step_mins: int, date_local: datetime, tz):
    slots = []
    key = DAY_KEY[date_local.weekday()]
    print(f'Looking for key: {key}')
    print(f'Opening hours type: {type(opening_hours)}')
    
    # If it's a string, parse it
    if isinstance(opening_hours, str):
        opening_hours = json.loads(opening_hours)
    
    windows = opening_hours.get(key, []) or []
    print(f'Windows found: {windows}')
    
    if not windows:
        return slots

    duration = timedelta(minutes=duration_mins)
    step = timedelta(minutes=step_mins or duration_mins)

    for w in windows:
        start_t = _parse_hhmm(w['start'])
        end_t = _parse_hhmm(w['end'])
        window_start = _to_tz(date_local, start_t, tz)
        window_end = _to_tz(date_local, end_t, tz)
        
        print(f'Window: {window_start} to {window_end}')

        cur = window_start
        while cur + duration <= window_end:
            slots.append(cur)
            cur += step
    
    print(f'Generated {len(slots)} slots')
    return slots

async def test():
    conn = await asyncpg.connect('postgresql://sadeshibeshi@localhost:5432/booking_system')
    
    svc = await conn.fetchrow(
        'SELECT opening_hours, duration_mins, tenant_id FROM services WHERE id = $1',
        '22222222-2222-2222-2222-222222222222'
    )
    
    print(f'Opening hours: {svc["opening_hours"]}')
    print(f'Duration: {svc["duration_mins"]} mins')
    
    tz = pytz.timezone('America/New_York')
    test_date = tz.localize(datetime(2025, 10, 27))
    
    slots = generate_time_slots(
        svc['opening_hours'],
        svc['duration_mins'],
        svc['duration_mins'],
        test_date,
        tz
    )
    
    print(f'\nFirst 5 slots:')
    for slot in slots[:5]:
        print(f'  {slot.isoformat()}')
    
    await conn.close()

asyncio.run(test())
