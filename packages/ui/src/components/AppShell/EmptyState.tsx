import React from 'react';
import { cn } from '../../lib/utils';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action,
  className 
}: EmptyStateProps) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center text-center p-xl',
      'min-h-[400px]',
      className
    )}>
      {icon && (
        <div className="mb-lg text-text-subtle opacity-50">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-text mb-sm">
        {title}
      </h3>
      {description && (
        <p className="text-text-muted max-w-md mb-lg">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
