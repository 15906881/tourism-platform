export interface PricingTier {
    _id: string;
    name: string;
    description: string;
    price: number;
    _currency?: string;
    period?: string;
    features: string[];
    highlighted?: boolean;
    ctaText?: string;
    onSelect?: (id: string) => void;
}
export interface PricingTableProps {
    tiers: PricingTier[];
    className?: string;
}
export declare function PricingTable({ tiers, className }: PricingTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PricingTable.d.ts.map