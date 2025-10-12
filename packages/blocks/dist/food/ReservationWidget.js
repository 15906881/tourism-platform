"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Input, Select, Button } from '@weblynk/ui';
import { clsx } from 'clsx';
export function ReservationWidget({ availableTimes, onSubmit, className }) {
    const [formData, setFormData] = React.useState({
        date: '',
        time: '',
        partySize: 2,
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
    });
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.date)
            newErrors.date = 'Date is required';
        if (!formData.time)
            newErrors.time = 'Time is required';
        if (formData.partySize < 1)
            newErrors.partySize = 'Invalid party size';
        if (!formData.name.trim())
            newErrors.name = 'Name is required';
        if (!formData.email.trim())
            newErrors.email = 'Email is required';
        if (!formData.phone.trim())
            newErrors.phone = 'Phone is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate())
            return;
        setLoading(true);
        try {
            await onSubmit(formData);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: clsx('bg-white rounded-lg shadow-sm p-6', className), children: [_jsx("h3", { className: "text-2xl font-display mb-6", children: "Make a Reservation" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Input, { type: "date", value: formData.date, onChange: (e) => setFormData({ ...formData, date: e.target.value }), error: !!errors.date }), errors.date && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.date })] }), _jsxs("div", { children: [_jsxs(Select, { value: formData.time, onChange: (e) => setFormData({ ...formData, time: e.target.value }), error: !!errors.time, children: [_jsx("option", { value: "", children: "Select time" }), availableTimes.map((time) => (_jsx("option", { value: time, children: time }, time)))] }), errors.time && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.time })] })] }), _jsx("div", { children: _jsx(Select, { value: formData.partySize, onChange: (e) => setFormData({ ...formData, partySize: parseInt(e.target.value) }), children: [1, 2, 3, 4, 5, 6, 7, 8].map((size) => (_jsxs("option", { value: size, children: [size, " ", size === 1 ? 'guest' : 'guests'] }, size))) }) }), _jsxs("div", { children: [_jsx(Input, { placeholder: "Full Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), error: !!errors.name }), errors.name && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.name })] }), _jsxs("div", { children: [_jsx(Input, { type: "email", placeholder: "Email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), error: !!errors.email }), errors.email && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.email })] }), _jsxs("div", { children: [_jsx(Input, { type: "tel", placeholder: "Phone", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), error: !!errors.phone }), errors.phone && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.phone })] }), _jsx("div", { children: _jsx(Input, { placeholder: "Special requests (optional)", value: formData.specialRequests, onChange: (e) => setFormData({ ...formData, specialRequests: e.target.value }) }) }), _jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? 'Submitting...' : 'Reserve Table' })] })] }));
}
//# sourceMappingURL=ReservationWidget.js.map