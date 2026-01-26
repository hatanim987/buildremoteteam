import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg";

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus-visible:ring-gray-900",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
