import React from 'react';
import { cn } from '../../lib/utils';

export interface SidebarProps {
  children: React.ReactNode;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Sidebar({ children, logo, footer, className }: SidebarProps) {
  return (
    <div className={cn('flex flex-col h-full', className)}>
      {logo && (
        <div className="h-16 px-lg flex items-center border-b border-border">
          {logo}
        </div>
      )}
      <nav className="flex-1 overflow-y-auto py-md px-sm">
        {children}
      </nav>
      {footer && (
        <div className="px-lg py-md border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
}

export interface SidebarItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function SidebarItem({ 
  icon, 
  children, 
  active, 
  onClick, 
  href,
  className 
}: SidebarItemProps) {
  const Comp = href ? 'a' : 'button';
  
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-md py-sm rounded-md',
        'text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus',
        active 
          ? 'bg-primary/10 text-primary' 
          : 'text-text-muted hover:bg-surface-2 hover:text-text',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </Comp>
  );
}
