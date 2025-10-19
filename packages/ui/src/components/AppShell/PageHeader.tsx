import React from 'react';
import { cn } from '../../lib/utils.js';

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  className?: string;
}

export function PageHeader({ 
  title, 
  description, 
  actions, 
  breadcrumbs,
  className 
}: PageHeaderProps) {
  return (
    <div className={cn('border-b border-border bg-surface', className)}>
      <div className="px-lg py-lg">
        {breadcrumbs && (
          <div className="mb-md text-sm text-text-muted">
            {breadcrumbs}
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-heading font-semibold text-text mb-xs">
              {title}
            </h1>
            {description && (
              <p className="text-text-muted">{description}</p>
            )}
          </div>
          {actions && (
            <div className="flex-shrink-0 flex items-center gap-sm">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
