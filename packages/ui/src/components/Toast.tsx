'use client'

import React from 'react';
import { clsx } from 'clsx';

export interface ToastProps {
  id: string;
  message: string;
  variant?: 'default' | 'success' | 'error' | 'warning';
  onClose: (id: string) => void;
}

export function Toast({ id, message, variant = 'default', onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => onClose(id), 5000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const variantStyles = {
    default: 'bg-gray-900 text-white',
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-600 text-white',
  };

  return (
    <div
      className={clsx(
        'rounded-lg px-4 py-3 shadow-luxury flex items-center justify-between gap-4 min-w-[300px]',
        variantStyles[variant]
      )}
      role="alert"
    >
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="text-white/80 hover:text-white"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

export interface ToastContainerProps {
  toasts: ToastProps[];
}

export function ToastContainer({ toasts }: ToastContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}
