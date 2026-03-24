import clsx from "clsx";
import { ControllerRenderProps } from "react-hook-form";
import Select, { SingleValue, StylesConfig } from "react-select";

import { SelectorOption } from "@/components/form/Form";
import { Quest } from "@/components/form/model/contract";

type SelectComponentProps = {
  options: SelectorOption[];
  field: ControllerRenderProps<Quest, "status" | "category">;
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
      {...props}
      isMulti={false}
      isSearchable={false}
      classNamePrefix="react-select"
      className={clsx(className)}
      options={options}
      value={options.find((option) => option.value === field.value)}
      onChange={(newValue: SingleValue<SelectorOption>) =>
        field.onChange(newValue?.value)
      }
      styles={styles}
    />
  );
};
