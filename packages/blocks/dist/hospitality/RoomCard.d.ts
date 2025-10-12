export interface RoomCardProps {
    _id: string;
    name: string;
    description: string;
    price: number;
    _currency?: string;
    images: string[];
    capacity: number;
    bedType?: string;
    size?: string;
    amenities: string[];
    available?: boolean;
    onBook?: (id: string) => void;
    className?: string;
}
export declare function RoomCard({ _id, name, description, price, _currency, images, capacity, bedType, size, amenities, available, onBook, className, }: RoomCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=RoomCard.d.ts.map