export interface TeamMemberProps {
    _id: string;
    name: string;
    role: string;
    bio: string;
    photo: string;
    email?: string;
    phone?: string;
    socialLinks?: {
        linkedin?: string;
        twitter?: string;
    };
    className?: string;
}
export declare function TeamMember({ _id, name, role, bio, photo, email, phone, socialLinks, className, }: TeamMemberProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TeamMember.d.ts.map