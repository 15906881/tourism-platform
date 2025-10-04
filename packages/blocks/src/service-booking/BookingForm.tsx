"use client";

import React from 'react';
import { Input, Button } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface BookingData {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface BookingFormProps {
  serviceId: string;
  serviceName: string;
  onSubmit: (data: BookingData) => Promise<void>;
  className?: string;
}

export function BookingForm({ serviceId, serviceName, onSubmit, className }: BookingFormProps) {
  const [step, setStep] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<BookingData>({
    date: '',
    time: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1) newErrors.guests = 'At least 1 guest required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx('max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm', className)}>
      <h2 className="text-2xl font-display mb-6">Book {serviceName}</h2>

      {/* Progress Indicator */}
      <div className="flex mb-8">
        <div className={clsx('flex-1 text-center pb-2 border-b-2', step >= 1 ? 'border-gold-600' : 'border-gray-300')}>
          <span className={clsx('text-sm', step >= 1 ? 'text-gold-600 font-medium' : 'text-gray-500')}>
            1. Date & Time
          </span>
        </div>
        <div className={clsx('flex-1 text-center pb-2 border-b-2', step >= 2 ? 'border-gold-600' : 'border-gray-300')}>
          <span className={clsx('text-sm', step >= 2 ? 'text-gold-600 font-medium' : 'text-gray-500')}>
            2. Your Details
          </span>
        </div>
      </div>

      {/* Step 1: Date & Time */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              error={!!errors.date}
            />
            {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              error={!!errors.time}
            />
            {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
          </div>

          <div>
            <Input
              type="number"
              min="1"
              placeholder="Number of guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
              error={!!errors.guests}
            />
            {errors.guests && <p className="text-red-600 text-sm mt-1">{errors.guests}</p>}
          </div>

          <Button onClick={handleNext} className="w-full">
            Continue
          </Button>
        </div>
      )}

      {/* Step 2: Contact Info */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={!!errors.name}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={!!errors.phone}
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={loading} className="flex-1">
              {loading ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
