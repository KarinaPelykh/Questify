import clsx from "clsx";
import { ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  className?: string;
};
export const Dialog = ({ className, children }: DialogProps) => {
  return (
    <div className={clsx(className)}>
      <div>{children}</div>
    </div>
  );
};
