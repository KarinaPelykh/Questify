import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  type?: "button" | "submit";
};

export const Button = ({
  type = "button",
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(variant === "primary" && "bg-transparent", className)}
      {...props}
    >
      {children}
    </button>
  );
};
