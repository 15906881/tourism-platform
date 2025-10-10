import React from 'react';
import { cn } from '../../lib/utils';

export interface ContentAreaProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-[1536px]',
  full: 'max-w-none'
};

const paddingClasses = {
  none: '',
  sm: 'p-md',
  md: 'p-lg',
  lg: 'p-xl'
};

export function ContentArea({ 
  children, 
  maxWidth = 'full',
  padding = 'lg',
  className 
}: ContentAreaProps) {
  return (
    <div className={cn(
      'w-full mx-auto',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
}
