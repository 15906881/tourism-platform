"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Input, Textarea, Button } from '@weblynk/ui';
import { clsx } from 'clsx';
export function ContactForm({ submitEndpoint, onSuccess, onError, className }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = React.useState('idle');
    const [errors, setErrors] = React.useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim())
            newErrors.name = 'Name is required';
        if (!formData.email.trim())
            newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim())
            newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate())
            return;
        setStatus('loading');
        try {
            const response = await fetch(submitEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok)
                throw new Error('Submission failed');
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            onSuccess?.();
        }
        catch (error) {
            setStatus('error');
            onError?.(error);
        }
    };
    return (_jsx("section", { className: clsx('py-16 px-4', className), children: _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-display mb-8 text-center", children: "Get In Touch" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Input, { placeholder: "Your Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), error: !!errors.name }), errors.name && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.name })] }), _jsxs("div", { children: [_jsx(Input, { type: "email", placeholder: "Your Email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), error: !!errors.email }), errors.email && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.email })] }), _jsx("div", { children: _jsx(Input, { type: "tel", placeholder: "Phone (optional)", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }) }) }), _jsxs("div", { children: [_jsx(Textarea, { placeholder: "Your Message", value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), error: !!errors.message, rows: 5 }), errors.message && _jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.message })] }), _jsx(Button, { type: "submit", disabled: status === 'loading', className: "w-full", children: status === 'loading' ? 'Sending...' : 'Send Message' }), status === 'success' && (_jsx("p", { className: "text-green-600 text-center", children: "Message sent successfully!" })), status === 'error' && (_jsx("p", { className: "text-red-600 text-center", children: "Failed to send message. Please try again." }))] })] }) }));
}
//# sourceMappingURL=ContactForm.js.map