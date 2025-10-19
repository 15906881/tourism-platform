import { ReactNode } from 'react';

interface SkeletonProps {
  children?: ReactNode;
}

export function Skeleton({ children }: SkeletonProps) {
  return <div className="animate-pulse bg-surface-2 rounded">{children}</div>;
}
