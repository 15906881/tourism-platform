import React from 'react';
import { clsx } from 'clsx';

export interface DayHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface HoursProps {
  hours: DayHours[];
  className?: string;
}

export function Hours({ hours, className }: HoursProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section className={clsx('py-8 px-4', className)}>
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-display mb-6">Hours of Operation</h3>
        <div className="space-y-3">
          {hours.map((day) => (
            <div
              key={day.day}
              className={clsx(
                'flex justify-between py-2 border-b border-gray-200',
                day.day === today && 'font-semibold text-gold-600'
              )}
            >
              <span>{day.day}</span>
              <span>
                {day.closed ? 'Closed' : `${day.open} - ${day.close}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
