import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(variant === "primary" && "bg-transparent", className)}
      {...props}
    >
      {children}
    </button>
  );
};
