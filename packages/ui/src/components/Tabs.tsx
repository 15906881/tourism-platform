'use client'

import React from 'react';
import { clsx } from 'clsx';

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  onChange: (value: string) => void;
} | null>(null);

export function Tabs({ defaultValue, value: controlledValue, onValueChange, children }: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const value = controlledValue ?? internalValue;
  const onChange = onValueChange ?? setInternalValue;

  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <div
      className={clsx('inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1', className)}
      role="tablist"
      {...props}
    />
  );
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const isActive = context.value === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={clsx(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all',
        isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900',
        className
      )}
      onClick={() => context.onChange(value)}
      {...props}
    />
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({ className, value, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');

  if (context.value !== value) return null;

  return (
    <div
      role="tabpanel"
      className={clsx('mt-2', className)}
      {...props}
    />
  );
}
