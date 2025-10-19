import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils.js';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: 'default' | 'subtle' | 'ghost';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, variant = 'default', type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'w-full px-md py-sm rounded-md',
          'text-text border',
          'placeholder:text-text-subtle',
          'transition-colors duration-200',
          'focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-border-focus/20',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'default' && 'bg-surface-2 border-border',
          variant === 'subtle' && 'bg-surface border-border',
          variant === 'ghost' && 'bg-transparent border-transparent',
          error && 'border-error focus:border-error focus:ring-error/20',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
