export interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
    avatar?: string;
}
export interface ReviewsProps {
    reviews: Review[];
    autoRotate?: boolean;
    className?: string;
}
export declare function Reviews({ reviews, autoRotate, className }: ReviewsProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Reviews.d.ts.map