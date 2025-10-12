export interface ServiceCardProps {
    _id: string;
    name: string;
    description: string;
    price: number;
    _currency?: string;
    duration?: string;
    image?: string;
    category?: string;
    featured?: boolean;
    onBook?: (id: string) => void;
    className?: string;
}
export declare function ServiceCard({ _id, name, description, price, _currency, duration, image, category, featured, onBook, className, }: ServiceCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ServiceCard.d.ts.map