import { valibotResolver } from "@hookform/resolvers/valibot";
import clsx from "clsx";
import { ReactNode } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { Icon } from "@/shared/ui";
import {
  colorDot,
  ErrorMessage,
  Form,
  FormField,
  handelColor,
  Input,
  Label,
} from "@/shared/ui/Form";
import { SelectComponent } from "@/shared/ui/select/Select";
import { CATEGORIES, STATUSES } from "@/shared/ui/select/select.constants";

import { Quest, QuestSchema } from "../form/model/contract";
import { useEdit } from "./api/useEdit";

export const EditForm = ({
  quest,
  children,
  close,
}: {
  quest: Quest & { _id: string };
  children: ReactNode;
  close: () => void;
}) => {
  const { quest: text, status, category, date } = quest;

  const form = useForm<Quest>({
    defaultValues: {
      quest: text,
      status,
      category,
      date,
    },

    resolver: valibotResolver(QuestSchema),
  });

  const { mutate: editQuest } = useEdit({ close });

  return (
    <Form
      onSubmit={form.handleSubmit((data) =>
        editQuest({ ...data, _id: quest._id }),
      )}
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
              EDIT QUEST
            </Label>
            <Input
              id="quest"
              {...form.register("quest")}
              className="p-0! h-3.5 border-t-transparent border-l-transparent border-r-transparent border-b-marine-blue rounded-none! w-40.75"
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
          {children}
        </div>
      </FormProvider>
    </Form>
  );
};
