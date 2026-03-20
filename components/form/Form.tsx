"use client";
import { Button, Form, Icon } from "@/shared/ui";
import { FormField, Input, Label } from "@/shared/ui/Form";
import { SelectComponent } from "@/shared/ui/select/Select";
import { CATEGORIES, STATUSES } from "@/shared/ui/select/select.constants";
import clsx from "clsx";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StylesConfig } from "react-select";

export type SelectorOption = {
  color: string;
  value: string;
  label: string;
};

export const FormCard = () => {
  const form = useForm();

  const [category, setCategory] = useState<SelectorOption | null>({
    value: "STUFF",
    label: "STUFF",
    color: " #7b8aa4",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<SelectorOption | null>({
    value: "Hard",
    label: "Hard",
    color: " #7b8aa4",
  });

  const color =
    CATEGORIES.find((item) => item.value === category?.value)?.color || "";

  const dot = (color = "") => ({
    alignItems: "center",
    display: "flex",

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

  const colorDot: StylesConfig<SelectorOption> = {
    option: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

  return (
    <section className="container h-screen bg-light-white py-7 ">
      <Form className="bg-white rounded-xs p-5 tablet-l:w-56 ">
        <FormProvider {...form}>
          <div className="flex justify-between items-center mb-17 tablet-l:mb-9.75">
            <SelectComponent
              // styles={colorDot}
              setState={setStatus}
              options={STATUSES}
            />
            <Icon iconName="star" className="size-4.75 fill-gray" />
          </div>
          <div className="flex items-center flex-col tablet-l:mb-7">
            <FormField name="text" className="items-center mb-3">
              <Label className="text-xl  tablet-l:text-xss font-bold text-light-gray">
                CREATE NEW QUEST
              </Label>
              <Input className="p-0 border-t-transparent border-l-transparent border-r-transparent border-b-marine-blue rounded-none! w-40.75" />
            </FormField>

            <span className=" text-light-gray text-m font-normal flex items-center tablet-l:text-xs ">
              Today, 7:30 <Icon iconName="fire" className="w-3 h-4.5 ml-1.75" />
            </span>
          </div>

          <div className="flex justify-between">
            <div
              style={{ backgroundColor: color }}
              className={clsx(
                "w-30 flex items-center -ml-5 rounded-tr-m rounded-br-m tablet-l:w-22 tablet-l:h-6.25 tablet-l:text-caption mr-auto",
              )}
            >
              <SelectComponent setState={setCategory} options={CATEGORIES} />
            </div>
            <div>
              <Button>
                <Icon iconName="clear" className="size-2.5!" />
              </Button>
              <Button type="submit" className="text-marine-blue">
                START
              </Button>
            </div>
          </div>
        </FormProvider>
      </Form>
    </section>
  );
};
