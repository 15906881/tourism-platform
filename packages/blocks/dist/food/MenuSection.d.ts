import { type MenuItemProps } from './MenuItem';
export interface MenuSectionProps {
    title: string;
    description?: string;
    items: Omit<MenuItemProps, 'className'>[];
    className?: string;
}
export declare function MenuSection({ title, description, items, className }: MenuSectionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MenuSection.d.ts.map