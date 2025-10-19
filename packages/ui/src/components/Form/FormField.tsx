import React, { useId } from 'react';
import { cn } from '../../lib/utils.js';

export interface FormFieldProps {
  label: string;
  children: React.ReactElement;
  error?: string;
  help?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function FormField({
  label,
  children,
  error,
  help,
  required,
  disabled,
  className
}: FormFieldProps) {
  const id = useId();
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;

  const childWithProps = React.cloneElement(children, {
    id,
    'aria-describedby': cn(
      help && helpId,
      error && errorId
    ) || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-required': required ? true : undefined,
    disabled,
  });

  return (
    <div className={cn('space-y-xs', className)}>
      <label
        htmlFor={id}
        className={cn(
          'block text-sm font-medium text-text',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        {label}
        {required && (
          <span className="text-error ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {childWithProps}

      {help && !error && (
        <p
          id={helpId}
          className="text-sm text-text-muted"
        >
          {help}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className="text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
