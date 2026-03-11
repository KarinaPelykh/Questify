import { ComponentProps, ReactNode } from "react";

type From = ComponentProps<"form">;

export const From = ({ ...props }: From) => {
  return <form {...props} />;
};

export const ItemFrom = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const Label = ({ ...props }: ComponentProps<"label">) => {
  return <label {...props} />;
};

export const Input = ({ ...props }: ComponentProps<"input">) => {
  return <Input {...props} />;
};

export const ErrorMessage = ({
  className,
  ...props
}: { className: string } & ComponentProps<"div">) => {
  return <div {...props} className={className}></div>;
};
