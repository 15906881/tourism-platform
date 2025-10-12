export interface CaseStudyProps {
    title: string;
    client: string;
    category: string;
    challenge: string;
    solution: string;
    results: string[];
    images?: string[];
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
    className?: string;
}
export declare function CaseStudy({ title, client, category, challenge, solution, results, images, testimonial, className, }: CaseStudyProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CaseStudy.d.ts.map