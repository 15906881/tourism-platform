"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Input, Button } from '@weblynk/ui';
import { clsx } from 'clsx';
export function BookingForm({ _serviceId, serviceName, onSubmit, className }) {
    const [step, setStep] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        date: '',
        time: '',
        guests: 1,
        name: '',
        email: '',
        phone: '',
        notes: '',
    });
    const [errors, setErrors] = React.useState({});
    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.date)
            newErrors.date = 'Date is required';
        if (!formData.time)
            newErrors.time = 'Time is required';
        if (formData.guests < 1)
            newErrors.guests = 'At least 1 guest required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.name.trim())
            newErrors.name = 'Name is required';
        if (!formData.email.trim())
            newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formData.phone.trim())
            newErrors.phone = 'Phone is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleNext = () => {
        if (step === 1 && validateStep1())
            setStep(2);
    };
    const handleSubmit = async () => {
        if (!validateStep2())
            return;
        setLoading(true);
        try {
            await onSubmit(formData);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: clsx('max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm', className), children: [_jsxs("h2", { className: "text-2xl font-display mb-6", children: ["Book ", serviceName] }), _jsxs("div", { className: "flex mb-8", children: [_jsx("div", { className: clsx('flex-1 text-center pb-2 border-b-2', step >= 1 ? 'border-gold-600' : 'border-gray-300'), children: _jsx("span", { className: clsx('text-sm', step >= 1 ? 'text-gold-600 font-medium' : 'text-gray-500'), children: "1. Date & Time" }) }), _jsx("div", { className: clsx('flex-1 text-center pb-2 border-b-2', step >= 2 ? 'border-gold-600' : 'border-gray-300'), children: _jsx("span", { className: clsx('text-sm', step >= 2 ? 'text-gold-600 font-medium' : 'text-gray-500'), children: "2. Your Details" }) })] }), step === 1 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Input, { type: "date", value: formData.date, onChange: (e) => setFormData({ ...formData, date: e.target.value }), error: !!errors.date }), errors.date && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.date })] }), _jsxs("div", { children: [_jsx(Input, { type: "time", value: formData.time, onChange: (e) => setFormData({ ...formData, time: e.target.value }), error: !!errors.time }), errors.time && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.time })] }), _jsxs("div", { children: [_jsx(Input, { type: "number", min: "1", placeholder: "Number of guests", value: formData.guests, onChange: (e) => setFormData({ ...formData, guests: parseInt(e.target.value) }), error: !!errors.guests }), errors.guests && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.guests })] }), _jsx(Button, { onClick: handleNext, className: "w-full", children: "Continue" })] })), step === 2 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Input, { placeholder: "Full Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), error: !!errors.name }), errors.name && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.name })] }), _jsxs("div", { children: [_jsx(Input, { type: "email", placeholder: "Email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), error: !!errors.email }), errors.email && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.email })] }), _jsxs("div", { children: [_jsx(Input, { type: "tel", placeholder: "Phone", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), error: !!errors.phone }), errors.phone && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.phone })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "secondary", onClick: () => setStep(1), children: "Back" }), _jsx(Button, { onClick: handleSubmit, disabled: loading, className: "flex-1", children: loading ? 'Processing...' : 'Confirm Booking' })] })] }))] }));
}
//# sourceMappingURL=BookingForm.js.map