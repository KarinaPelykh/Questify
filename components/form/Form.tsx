"use client";
import { Form, Icon } from "@/shared/ui";
import { ErrorMessage, FormField, Input, Label } from "@/shared/ui/Form";
import { SelectComponent } from "@/shared/ui/select/Select";
import { CATEGORIES, STATUSES } from "@/shared/ui/select/select.constants";
import clsx from "clsx";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { StylesConfig } from "react-select";
import { ControllerBtn } from "./ControllerBtn";
import { Quest, QuestSchema } from "./model/contract";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useAddQuery } from "./api/useAddQuest";

export type SelectorOption = {
  color: string;
  value: string;
  label: string;
};

export const FormCard = () => {
  const form = useForm<Quest>({
    defaultValues: {
      quest: "",
      status: "Normal",
      category: "STUFF",
      date: "21.03.2026",
    },
    resolver: valibotResolver(QuestSchema),
  });

  const color =
    // eslint-disable-next-line react-hooks/incompatible-library
    CATEGORIES.find((item) => item.value === form?.watch("category"))?.color ||
    " #7b8aa4";

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

  const colorDot: StylesConfig<SelectorOption> = {
    option: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };
  const { mutate: addQuest } = useAddQuery();

  return (
    <Form
      onSubmit={form.handleSubmit((data) => addQuest(data))}
      className="bg-white rounded-xs p-5 tablet-l:w-56  tablet-l:h-52"
    >
      <FormProvider {...form}>
        <div className="flex justify-between items-center mb-17 tablet-l:mb-9.75">
          <Controller
            name="status"
            control={form.control}
            render={({ field }) => (
              <SelectComponent
                styles={colorDot}
                options={STATUSES}
                field={field}
              />
            )}
          />

          {/* <SelectComponent styles={colorDot} options={STATUSES} /> */}

          <Icon iconName="star" className="size-4.75 fill-gray" />
        </div>
        <div className="flex items-center flex-col tablet-l:mb-7">
          <FormField name="quest" className="items-center mb-3 relative">
            <Label className="text-xl  tablet-l:text-xss font-bold text-light-gray">
              CREATE NEW QUEST
            </Label>
            <Input
              id="quest"
              {...form.register("quest")}
              className="p-0! border-t-transparent border-l-transparent border-r-transparent border-b-marine-blue rounded-none! w-40.75"
            />
            <ErrorMessage className="absolute -bottom-4" />
          </FormField>
          {/* <div>
              <input
                type="time"
                className=" text-light-gray text-m font-normal flex items-center tablet-l:text-xs "
              />
              Today
            </div> */}
        </div>

        <div className="flex justify-between relative">
          <div
            style={{ backgroundColor: color }}
            className={clsx(
              "w-30  absolute -left-5 bottom-0 rounded-tr-m rounded-br-m tablet-l:w-22 tablet-l:h-6.25 ",
            )}
          />
          <Controller
            name="category"
            control={form.control}
            render={({ field }) => (
              <SelectComponent
                className="tablet-l:text-caption"
                field={field}
                options={CATEGORIES}
              />
            )}
          />
          <ControllerBtn />
        </div>
      </FormProvider>
    </Form>
  );
};
