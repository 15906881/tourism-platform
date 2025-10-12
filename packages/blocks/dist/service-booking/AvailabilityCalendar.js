"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button } from '@weblynk/ui';
import { clsx } from 'clsx';
export function AvailabilityCalendar({ availableDates, onSelectDate, onSelectTime, timeSlots, className, }) {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const isDateAvailable = (day) => {
        return availableDates.some((date) => date.getDate() === day &&
            date.getMonth() === currentMonth.getMonth() &&
            date.getFullYear() === currentMonth.getFullYear());
    };
    const handleDateClick = (day) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(date);
        onSelectDate(date);
    };
    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };
    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };
    return (_jsxs("div", { className: clsx('p-6 bg-white rounded-lg shadow-sm', className), children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: prevMonth, children: "\u2039" }), _jsx("h3", { className: "text-lg font-medium", children: currentMonth.toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                        }) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: nextMonth, children: "\u203A" })] }), _jsxs("div", { className: "grid grid-cols-7 gap-2 mb-6", children: [['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (_jsx("div", { className: "text-center text-sm font-medium text-gray-600", children: day }, day))), Array.from({ length: firstDayOfMonth }).map((_, i) => (_jsx("div", {}, `empty-${i}`))), Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const available = isDateAvailable(day);
                        const isSelected = selectedDate?.getDate() === day &&
                            selectedDate?.getMonth() === currentMonth.getMonth();
                        return (_jsx("button", { onClick: () => available && handleDateClick(day), disabled: !available, className: clsx('aspect-square rounded-lg text-sm transition-colors', available
                                ? 'hover:bg-gold-100 cursor-pointer'
                                : 'text-gray-300 cursor-not-allowed', isSelected && 'bg-gold-600 text-white hover:bg-gold-700'), children: day }, day));
                    })] }), selectedDate && timeSlots && (_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Available Times" }), _jsx("div", { className: "grid grid-cols-3 gap-2", children: timeSlots.map((slot) => (_jsx(Button, { variant: slot.available ? 'secondary' : 'ghost', size: "sm", disabled: !slot.available, onClick: () => onSelectTime?.(slot.time), children: slot.time }, slot.time))) })] }))] }));
}
//# sourceMappingURL=AvailabilityCalendar.js.map