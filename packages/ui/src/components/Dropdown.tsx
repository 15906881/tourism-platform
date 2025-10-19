'use client'

import React from 'react';
import { clsx } from 'clsx';

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export function Dropdown({ trigger, children, align = 'left' }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div
          className={clsx(
            'absolute z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-luxury py-1',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function DropdownItem({ className, children, ...props }: DropdownItemProps) {
  return (
    <button
      className={clsx(
        'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
