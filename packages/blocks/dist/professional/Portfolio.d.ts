export interface PortfolioItem {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    tags?: string[];
    link?: string;
}
export interface PortfolioProps {
    items: PortfolioItem[];
    columns?: 2 | 3 | 4;
    showFilters?: boolean;
    className?: string;
}
export declare function Portfolio({ items, columns, showFilters, className }: PortfolioProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Portfolio.d.ts.map