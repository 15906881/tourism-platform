"use client";

import React from 'react';
import { Button } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface AvailabilityCalendarProps {
  availableDates: Date[];
  onSelectDate: (date: Date) => void;
  onSelectTime?: (time: string) => void;
  timeSlots?: TimeSlot[];
  className?: string;
}

export function AvailabilityCalendar({
  availableDates,
  onSelectDate,
  onSelectTime,
  timeSlots,
  className,
}: AvailabilityCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const isDateAvailable = (day: number) => {
    return availableDates.some(
      (date) =>
        date.getDate() === day &&
        date.getMonth() === currentMonth.getMonth() &&
        date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
    onSelectDate(date);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  return (
    <div className={clsx('p-6 bg-white rounded-lg shadow-sm', className)}>
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" size="sm" onClick={prevMonth}>
          ‹
        </Button>
        <h3 className="text-lg font-medium">
          {currentMonth.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </h3>
        <Button variant="ghost" size="sm" onClick={nextMonth}>
          ›
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const available = isDateAvailable(day);
          const isSelected =
            selectedDate?.getDate() === day &&
            selectedDate?.getMonth() === currentMonth.getMonth();

          return (
            <button
              key={day}
              onClick={() => available && handleDateClick(day)}
              disabled={!available}
              className={clsx(
                'aspect-square rounded-lg text-sm transition-colors',
                available
                  ? 'hover:bg-gold-100 cursor-pointer'
                  : 'text-gray-300 cursor-not-allowed',
                isSelected && 'bg-gold-600 text-white hover:bg-gold-700'
              )}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && timeSlots && (
        <div>
          <h4 className="font-medium mb-3">Available Times</h4>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot.time}
                variant={slot.available ? 'secondary' : 'ghost'}
                size="sm"
                disabled={!slot.available}
                onClick={() => onSelectTime?.(slot.time)}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
