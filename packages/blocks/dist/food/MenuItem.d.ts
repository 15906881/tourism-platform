export interface MenuItemProps {
    _id: string;
    name: string;
    description: string;
    price: number;
    _currency?: string;
    image?: string;
    dietary?: ('vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free')[];
    spicyLevel?: 1 | 2 | 3;
    popular?: boolean;
    className?: string;
}
export declare function MenuItem({ _id, name, description, price, _currency, image, dietary, spicyLevel, popular, className, }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MenuItem.d.ts.map