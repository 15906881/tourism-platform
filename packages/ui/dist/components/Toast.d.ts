export interface ToastProps {
    id: string;
    message: string;
    variant?: 'default' | 'success' | 'error' | 'warning';
    onClose: (id: string) => void;
}
export declare function Toast({ id, message, variant, onClose }: ToastProps): import("react/jsx-runtime").JSX.Element;
export interface ToastContainerProps {
    toasts: ToastProps[];
}
export declare function ToastContainer({ toasts }: ToastContainerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Toast.d.ts.map