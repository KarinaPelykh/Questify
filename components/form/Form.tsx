"use client";
import { Button, Form, Icon } from "@/shared/ui";
import { FormField, Input, Label } from "@/shared/ui/Form";
import clsx from "clsx";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const CATEGORIES = [
  { category: "STUFF", color: " #7b8aa4" },
  { category: "FAMILY", color: "#ffe6d3" },
  { category: "HEALTH", color: "#cdf7ff" },
  { category: "LEARNING", color: " #fff6c0" },
  { category: "LEISURE", color: "#f8d2ff" },
  { category: "WORK", color: "#d3f6ce" },
];

const STATUSES = ["Hard", "Normal", "Easy"];

export const FormCard = () => {
  const form = useForm();

  const [category, setCategory] = useState<string>("STUFF");

  const color = CATEGORIES.find((item) => item.category === category)?.color;

  return (
    <section className="container h-screen bg-light-white py-7 ">
      <Form className="bg-white rounded-xs p-5 tablet-l:w-56 ">
        <FormProvider {...form}>
          <div className="flex justify-between items-center mb-17 tablet-l:mb-9.75">
            {/* <select
              className="text-light-gray text-base tablet-l:text-sx"
              name="selectedStatus"
              defaultValue="Normal"
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  <span
                    className={clsx(
                      "rounded-full size-2 bg-marine-blue block",
                      status === "Hard" && "bg-red",
                      status === "Easy" && "bg-bright-green",
                    )}
                  />
                  {status}
                </option>
              ))}
            </select> */}
            <Icon iconName="star" className="size-4.75 fill-gray" />
          </div>
          <div className="flex items-center flex-col tablet-l:mb-7">
            <FormField name="text" className="items-center mb-3">
              <Label className="text-xl  tablet-l:text-xss font-bold text-light-gray">
                CREATE NEW QUEST
              </Label>
              <Input className="p-0 border-t-transparent border-l-transparent border-r-transparent border-b-marine-blue rounded-none! w-[163px]" />
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
              <select
                name="selectedCategories"
                defaultValue="STUFF"
                className="text-center outline-0"
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map((item) => (
                  <option
                    className="tablet-l:text-caption"
                    value={item.category}
                    key={item.category}
                  >
                    {item.category}
                  </option>
                ))}
              </select>
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
