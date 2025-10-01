"use client";

import React from 'react';
import { Input, Select, Button } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface ReservationData {
  date: string;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface ReservationWidgetProps {
  availableTimes: string[];
  onSubmit: (data: ReservationData) => Promise<void>;
  className?: string;
}

export function ReservationWidget({ availableTimes, onSubmit, className }: ReservationWidgetProps) {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    partySize: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.partySize < 1) newErrors.partySize = 'Invalid party size';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx('bg-white rounded-lg shadow-sm p-6', className)}>
      <h3 className="text-2xl font-display mb-6">Make a Reservation</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              variant={errors.date ? 'error' : 'default'}
            />
            {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <Select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              variant={errors.time ? 'error' : 'default'}
            >
              <option value="">Select time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
            {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
          </div>
        </div>

        <div>
          <Select
            value={formData.partySize}
            onChange={(e) => setFormData({ ...formData, partySize: parseInt(e.target.value) })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
              <option key={size} value={size}>
                {size} {size === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            variant={errors.name ? 'error' : 'default'}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            variant={errors.email ? 'error' : 'default'}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            variant={errors.phone ? 'error' : 'default'}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Input
            placeholder="Special requests (optional)"
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Submitting...' : 'Reserve Table'}
        </Button>
      </form>
    </div>
  );
}
