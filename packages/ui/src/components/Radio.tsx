import React from 'react';
import { clsx } from 'clsx';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className={clsx('flex items-center gap-2 cursor-pointer', className)}>
        <input
          type="radio"
          ref={ref}
          className="h-4 w-4 border-gray-300 text-gold-600 focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
        {label && <span className="text-sm text-gray-700 select-none">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export function RadioGroup({ className, children, orientation = 'vertical', ...props }: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      className={clsx(
        'flex gap-3',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
