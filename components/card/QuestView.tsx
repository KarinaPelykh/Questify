import { Button, Icon } from "@/shared/ui";

import { CATEGORIES, STATUSES } from "../../shared/ui/select/select.constants";
import { SelectorOption } from "../form/Form";
import { ActionBtn } from "./ActionBtn";
import { useQuestContext } from "./QuestContext";

type QuestViewProps = {
  setMode: (val: "save" | "clear" | "done") => void;
  setIsDone: (val: boolean) => void;
};

export const QuestView = ({ setMode, setIsDone }: QuestViewProps) => {
  const { quest } = useQuestContext();

  const handelColor = (s: SelectorOption[], value: string) =>
    s.find((item) => item.value === value)?.color;

  return (
    <>
      <div className="flex justify-between items-center mb-17 tablet-l:mb-9.75">
        <div className="flex gap-2 items-center justify-center">
          <span
            style={{
              backgroundColor: handelColor(STATUSES, quest.status),
            }}
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
      <div className="flex items-center flex-col mb-12.25 tablet-l:mb-auto">
        <h2 className="text-xl mb-3 tablet-l:text-base  tablet-l:font-bold">
          {quest.quest}
        </h2>
        <span className=" text-light-gray text-m font-normal flex items-center tablet-l:text-xs">
          Today, 7:30
          <Icon iconName="fire" className="w-3 h-4.5 ml-1.75" />
        </span>
      </div>
      <div className="relative h-8.75 tablet-l:h-6.25 flex justify-center items-center ">
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

        <ActionBtn setMode={setMode} />
      </div>
    </>
  );
};
