import Image from "next/image";

import { Button, Icon } from "@/shared/ui";

export const QuestDone = ({ quest }: { quest: string }) => {
  return (
    <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backface-hidden -rotate-y-180">
      <p className="mb-2.5 w-42.75 truncate">
        COMLETED:
        <span className="text-marine-blue underline ml-2">{quest}</span>
      </p>
      <Image src="/images/award.png" alt="award" width={144} height={124} />
      <Button className="text-gray flex justify-center items-center gap-1.75">
        Continue <Icon iconName="right-arrow" className=" w-1.75 h-1.25" />
      </Button>
    </div>
  );
};
