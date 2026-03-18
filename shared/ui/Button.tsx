import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
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
      className={clsx(
        variant === "primary" && "bg-transparent cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
