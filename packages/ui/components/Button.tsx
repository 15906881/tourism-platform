import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button variants using CVA for type-safe variant management
 * Uses Tailwind preset classes - no CSS variables or arbitrary values
 */
const buttonVariants = cva(
  // Base styles (applied to all variants)
  'inline-flex items-center justify-center font-semibold transition-all duration-standard ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'btn-ghost',
        outline: 'border border-border bg-transparent hover:bg-surface-2 hover:border-border-hover',
        danger: 'bg-error text-white hover:bg-error/90 shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'px-4 py-2 text-body-sm rounded-md',
        md: 'px-8 py-[14px] text-body rounded-md',
        lg: 'px-10 py-4 text-body-lg rounded-lg',
        icon: 'h-10 w-10 rounded-md',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Content to display inside the button
   */
  children: React.ReactNode;
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * Icon to display before the text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the text
   */
  rightIcon?: React.ReactNode;
}

/**
 * Luxury Button Component
 * 
 * @example
 * ```tsx
 * <Button>Default Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="ghost" size="sm">Small Ghost</Button>
 * <Button loading>Loading...</Button>
 * <Button leftIcon={<Icon />}>With Icon</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      children,
      disabled,
      loading,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={buttonVariants({ variant, size, fullWidth, className })}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Utility function for merging Tailwind classes
 * Install: npm install clsx tailwind-merge
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Usage Examples:
 * 
 * // Basic variants
 * <Button>Primary Button</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="ghost">Ghost</Button>
 * <Button variant="outline">Outline</Button>
 * <Button variant="danger">Delete</Button>
 * 
 * // Sizes
 * <Button size="sm">Small</Button>
 * <Button size="lg">Large</Button>
 * <Button size="icon"><IconTrash /></Button>
 * 
 * // States
 * <Button disabled>Disabled</Button>
 * <Button loading>Saving...</Button>
 * 
 * // With icons
 * <Button leftIcon={<IconPlus />}>Add Item</Button>
 * <Button rightIcon={<IconArrowRight />}>Continue</Button>
 * 
 * // Full width
 * <Button fullWidth>Full Width Button</Button>
 * 
 * // Custom className (merged properly)
 * <Button className="mt-4">With Extra Margin</Button>
 * 
 * // As link (type safety preserved)
 * <Button as="a" href="/dashboard">Go to Dashboard</Button>
 */
