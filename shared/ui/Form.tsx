"use client";

import clsx from "clsx";
import { ComponentProps, createContext, ReactNode, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { StylesConfig } from "react-select";

import { SelectorOption } from "@/components/form/Form";

import { CATEGORIES } from "./select/select.constants";

type Form = ComponentProps<"form">;

type FormFieldProps = {
  messageErr: string;
};

const FormFieldContext = createContext<FormFieldProps | null>(null);

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);

  if (!fieldContext) {
    throw new Error("useFormFiled must be used inside <FormField>");
  }

  return fieldContext;
};

export const Form = ({ ...props }: Form) => {
  return <form {...props} />;
};

export const FormField = ({
  name,
  children,
  className,
}: {
  name: string;
  children: ReactNode;
  className?: string;
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const messageErr = errors[name]?.message as string;

  return (
    <FormFieldContext value={{ messageErr }}>
      <div className={clsx("flex flex-col", className)}>{children}</div>
    </FormFieldContext>
  );
};

export const Label = ({ ...props }: ComponentProps<"label">) => {
  return <label className={clsx("text-xs mb-2")} {...props} />;
};

export const Input = ({ className, ...props }: ComponentProps<"input">) => {
  const { messageErr } = useFormField();
  return (
    <input
      {...props}
      className={clsx(
        messageErr && "border-red",
        "border border-marine-blue rounded-xs py-2 px-1.5 text-black text-xs outline-0 ",
        className,
      )}
    />
  );
};

export const ErrorMessage = ({ className, ...props }: ComponentProps<"p">) => {
  const { messageErr } = useFormField();

  return (
    <p
      {...props}
      className={clsx(
        messageErr ? "text-red text-xs mt-1.5" : "hidden",
        className,
      )}
    >
      {messageErr}
    </p>
  );
};
//setting fro select
export const handelColor = (watch: (val: string) => string) => {
  const color =
    // eslint-disable-next-line react-hooks/incompatible-library
    CATEGORIES.find((item) => item.value === watch("category"))?.color ||
    " #7b8aa4";
  return color;
};

const dot = (color = "") => ({
  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 8,
    width: 8,
  },
});

export const colorDot: StylesConfig<SelectorOption> = {
  option: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
