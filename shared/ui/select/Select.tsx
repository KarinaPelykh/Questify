import Select, { SingleValue } from "react-select";
// import css from "./select.module.css";
import { SelectorOption } from "@/components/form/Form";

type SelectComponentProps = {
  options: SelectorOption[];
  setState: (newValue: SingleValue<SelectorOption>) => void;
};

export const SelectComponent = ({
  options,
  setState,
  ...props
}: SelectComponentProps) => {
  return (
    <Select
      {...props}
      isSearchable={false}
      classNamePrefix="react-select"
      // className={css}
      defaultValue={options}
      onChange={setState}
      options={options}
    />
  );
};
