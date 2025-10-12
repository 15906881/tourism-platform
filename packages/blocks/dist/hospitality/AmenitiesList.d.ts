export interface Amenity {
    _id: string;
    name: string;
    icon?: string;
    category?: string;
}
export interface AmenitiesListProps {
    amenities: Amenity[];
    columns?: 2 | 3 | 4;
    showCategories?: boolean;
    className?: string;
}
export declare function AmenitiesList({ amenities, columns, showCategories, className, }: AmenitiesListProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AmenitiesList.d.ts.map