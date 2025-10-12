export interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string | number;
    height?: string | number;
    animation?: 'pulse' | 'wave' | 'none';
}
export declare function Skeleton({ className, variant, width, height, animation }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
export declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Skeleton.d.ts.map