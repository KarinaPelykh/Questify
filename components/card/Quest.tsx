"use client";
import clsx from "clsx";
import { useState } from "react";

import { useToggle } from "@/shared/hook/useToggle";
import { Button, Icon } from "@/shared/ui";

import { CATEGORIES, STATUSES } from "../../shared/ui/select/select.constants";
import { SelectorOption } from "../form/Form";
import { QuestRes } from "../form/model/contract";
import { ActionBtn } from "./ActionBtn";
import { DeleteDialog } from "./DeleteDialog";
import { QuestDone } from "./QuestDone";

export const Quest = (quest: QuestRes) => {
  const handelColor = (s: SelectorOption[], value: string) =>
    s.find((item) => item.value === value)?.color;

  const { isOpen, close, open } = useToggle();

  const [isDone, setIsDone] = useState(false);

  return (
    <div className="perspective-midrange size-full">
      <article
        className={clsx(
          "bg-white rounded-xs transform-3d tablet-l:w-56 tablet-l:h-52  h-fit p-5   transition-all duration-500  group",
          isDone && "rotate-y-180",
        )}
      >
        <div className="backface-hidden">
          <div className="flex justify-between items-center mb-17 tablet-l:mb-9.75">
            <div className="flex gap-2 items-center justify-center">
              <span
                style={{ backgroundColor: handelColor(STATUSES, quest.status) }}
                className="size-2.5 block rounded-full"
              />
              <p className="text-light-gray text-base">{quest.status}</p>
            </div>

            <Button onClick={() => setIsDone(true)}>
              <Icon
                iconName="star"
                className=" fill-marine-blue drop-shadow-blue! overflow-visible!"
              />
            </Button>
          </div>
          <div className="flex items-center flex-col mb-12.25 tablet-l:mb-auto ">
            <h2 className="text-xl mb-3 tablet-l:text-base  tablet-l:font-bold">
              {quest.quest}
            </h2>
            <span className=" text-light-gray text-m font-normal flex items-center tablet-l:text-xs">
              Today, 7:30
              {/* <Icon iconName="fire" className="w-3 h-4.5 ml-1.75" /> */}
            </span>
          </div>

          <div className="relative h-8.75">
            <div
              style={{
                backgroundColor: handelColor(CATEGORIES, quest.category),
              }}
              className="w-30 absolute -left-5 bottom-0  h-full flex justify-center items-center  rounded-tr-m rounded-br-m tablet-l:w-22 tablet-l:h-6.25 "
            >
              <span className="tablet-l:text-caption text-xs">
                {quest.category}
              </span>
            </div>

            <ActionBtn open={open} />
          </div>

          {isOpen && <DeleteDialog close={close} />}
        </div>
        <QuestDone quest={quest.quest} />
      </article>
    </div>
  );
};
