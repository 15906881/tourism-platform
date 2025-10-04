import React from 'react';
import { cn } from '../../lib/utils';

export interface AppShellProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  topbar?: React.ReactNode;
  className?: string;
}

export function AppShell({ children, sidebar, topbar, className }: AppShellProps) {
  return (
    <div className={cn('flex h-screen bg-bg overflow-hidden', className)}>
      {sidebar && (
        <aside className="w-64 border-r border-border bg-surface flex-shrink-0">
          {sidebar}
        </aside>
      )}
      <div className="flex flex-col flex-1 overflow-hidden">
        {topbar && (
          <header className="h-16 border-b border-border bg-surface flex-shrink-0">
            {topbar}
          </header>
        )}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
