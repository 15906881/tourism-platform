export interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}
export interface GalleryProps {
    images: GalleryImage[];
    columns?: 2 | 3 | 4;
    className?: string;
}
export declare function Gallery({ images, columns, className }: GalleryProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Gallery.d.ts.map