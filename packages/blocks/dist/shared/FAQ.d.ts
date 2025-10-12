export interface FAQItem {
    _id: string;
    question: string;
    answer: string;
}
export interface FAQProps {
    faqs: FAQItem[];
    className?: string;
}
export declare function FAQ({ faqs, className }: FAQProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FAQ.d.ts.map