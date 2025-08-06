import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-soft hover:bg-primary-light transition-colors",
        primary:
          "bg-primary text-white shadow-soft hover:bg-primary-dark transition-all duration-300",
        destructive:
          "bg-red-500 text-white shadow-soft hover:bg-red-600 transition-colors",
        outline:
          "border-2 border-gray-300 bg-white text-gray-700 shadow-soft hover:border-primary hover:text-primary transition-all duration-300",
        secondary:
          "bg-white text-primary shadow-soft hover:bg-gray-100 transition-all duration-300",
        ghost: "hover:bg-neutral-light hover:text-primary transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        cart: "bg-primary text-white shadow-soft hover:bg-primary-dark transition-colors",
        wishlist:
          "bg-white text-gray-700 border border-neutral-dark hover:border-primary transition-colors",
        hero: "bg-primary text-white shadow-lg hover:shadow-xl hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300",
        heroOutline: "border-2 border-gray-300 bg-transparent text-gray-700 hover:border-primary hover:text-primary transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 py-3 has-[>svg]:px-4",
        icon: "size-9",
        cart: "h-12 px-6 py-3",
        wishlist: "h-12 px-4 py-3",
        hero: "h-14 px-8 py-4 rounded-full",
        xl: "h-16 px-10 py-4 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

export function Button({
  children,
  onClick,
  variant = "default",
  size = "default",
  type = "button",
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
