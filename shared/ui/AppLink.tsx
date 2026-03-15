import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type AppLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
};

export const AppLink = ({ href, className, children }: AppLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(" transition-all duration-500", className)}
    >
      {children}
    </Link>
  );
};
