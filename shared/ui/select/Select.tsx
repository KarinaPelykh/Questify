import Select, { StylesConfig } from "react-select";
// import css from "./select.css";
import { SelectorOption } from "@/components/form/Form";
import { ControllerRenderProps } from "react-hook-form";
import { Quest } from "@/components/form/model/contract";
import clsx from "clsx";

type SelectComponentProps = {
  options: SelectorOption[];
  field: ControllerRenderProps<Quest>;
  styles?: StylesConfig<SelectorOption>;
  className?: string;
};

export const SelectComponent = ({
  options,
  field,
  styles,
  className,
  ...props
}: SelectComponentProps) => {
  return (
    <Select
      {...field}
      {...props}
      isSearchable={false}
      classNamePrefix="react-select"
      className={clsx(className)}
      options={options}
      value={options.find((s) => s.value === field.value)}
      onChange={(option) => field.onChange(option?.value)}
      styles={styles}
      // defaultValue={options[0]}
    />
  );
};
