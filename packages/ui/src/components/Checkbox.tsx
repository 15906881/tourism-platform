'use client'

import React from 'react';
import { clsx } from 'clsx';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, indeterminate, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate]);

    React.useImperativeHandle(ref, () => inputRef.current!);

    return (
      <label className={clsx('flex items-center gap-2 cursor-pointer', className)}>
        <input
          type="checkbox"
          ref={inputRef}
          className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
        {label && <span className="text-sm text-gray-700 select-none">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
