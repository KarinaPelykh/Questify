import { ComponentProps, ReactNode } from "react";

type Form = ComponentProps<"form">;

export const Form = ({ ...props }: Form) => {
  return <form {...props} />;
};

export const ItemForm = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const Label = ({ ...props }: ComponentProps<"label">) => {
  return <label className="text-xs mb-2" {...props} />;
};

export const Input = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      {...props}
      className="border border-marine-blue rounded-xs py-2 px-1.5 text-black text-xs outline-0 "
    />
  );
};

export const ErrorMessage = ({
  className,
  ...props
}: { className: string } & ComponentProps<"div">) => {
  return <div {...props} className={className}></div>;
};
