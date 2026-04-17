"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";
import clsx from "clsx";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { Form, Icon } from "@/shared/ui";
import {
  colorDot,
  ErrorMessage,
  FormField,
  handelColor,
  Input,
  Label,
} from "@/shared/ui/Form";
import { SelectComponent } from "@/shared/ui/select/Select";
import { CATEGORIES, STATUSES } from "@/shared/ui/select/select.constants";

import { useAddQuery } from "./api/useAddQuest";
import { ControllerBtn } from "./ControllerBtn";
import { Quest, QuestSchema } from "./model/contract";

export type SelectorOption = {
  color: string;
  value: string;
  label: string;
};

type FormCardProps = {
  close: () => void;
};

export const FormCard = ({ close }: FormCardProps) => {
  const form = useForm<Quest>({
    defaultValues: {
      quest: "",
      status: "Normal",
      category: "STUFF",
      date: "21.03.2026",
    },
    resolver: valibotResolver(QuestSchema),
  });

  const { mutate: addQuest } = useAddQuery({ reset: form.reset });

  return (
    <Form
      onSubmit={form.handleSubmit((data) => addQuest(data))}
      className="bg-white rounded-xs p-5 tablet-l:w-56 flex flex-col  tablet-l:h-52"
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
          <Icon iconName="star" className="size-4.75 fill-gray" />
        </div>
        <div className="flex items-center flex-col tablet-l:mb-auto">
          <FormField name="quest" className="items-center mb-3.5 relative">
            <Label className="text-xl  tablet-l:text-xss font-bold text-light-gray">
              CREATE NEW QUEST
            </Label>
            <Input
              id="quest"
              {...form.register("quest")}
              className="p-2.5 h-3.5 border-t-transparent border-l-transparent border-r-transparent border-b-marine-blue rounded-none! w-40.75"
            />
            <ErrorMessage className="absolute -bottom-4" />
          </FormField>
          <span className="text-light-gray text-m font-normal flex items-center tablet-l:text-xs">
            Today
            <Icon iconName="calendar" className="w-3 h-3.5 ml-2" />
          </span>
        </div>

        <div className="flex justify-between relative">
          <div
            style={{ backgroundColor: handelColor(form.watch) }}
            className={clsx(
              "w-30  absolute -left-5 bottom-0 rounded-tr-m rounded-br-m tablet-l:w-22 tablet-l:h-6.25 ",
            )}
          />
          <Controller
            name="category"
            control={form.control}
            render={({ field }) => (
              <SelectComponent
                className="tablet-l:text-caption text-xs"
                field={field}
                options={CATEGORIES}
              />
            )}
          />
          <ControllerBtn close={close} />
        </div>
      </FormProvider>
    </Form>
  );
};
