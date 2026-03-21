"use client";
import { Icon } from "@/shared/ui";
import { useGetCards } from "./api/useGetCards";
import { QuestRes } from "../form/model/contract";

export const Card = () => {
  const { data } = useGetCards();
  if (!data) return null;

  return (
    <>
      {data.map(({ status, quest, category, _id }: QuestRes) => (
        <article
          key={_id}
          className="bg-white rounded-xs p-5 tablet-l:w-56 tablet-l:h-52 flex flex-col"
        >
          <div className="flex justify-between items-center mb-17 tablet-l:mb-9.75">
            <p className="text-light-gray text-base">{status}</p>
            <Icon iconName="star" className="size-4.75 fill-marine-blue" />
          </div>
          <div className="flex items-center flex-col mb-12.25  tablet-l:mb-auto">
            <h2 className="text-xl mb-3 tablet-l:text-base  tablet-l:font-bold">
              {quest}
            </h2>
            <span className=" text-light-gray text-m font-normal flex items-center tablet-l:text-xs">
              Today, 7:30
              {/* <Icon iconName="fire" className="w-3 h-4.5 ml-1.75" /> */}
            </span>
          </div>

          <div className="relative">
            <div className="w-30  bg-green  absolute -left-5 bottom-0 rounded-tr-m rounded-br-m tablet-l:w-22 tablet-l:h-6.25 " />
            <span className="absolute  bottom-0 left-0 ">{category}</span>
          </div>
        </article>
      ))}
    </>
  );
};
