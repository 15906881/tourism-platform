import React from 'react';
type Theme = 'gold' | 'rose' | 'navy';
interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare function ThemeProvider({ children, defaultTheme }: {
    children: React.ReactNode;
    defaultTheme?: Theme;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map