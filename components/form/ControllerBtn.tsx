import * as Separator from "@radix-ui/react-separator";

import { Button, Icon } from "@/shared/ui";

type ControllerBtnProps = {
  close: () => void;
};

export const ControllerBtn = ({ close }: ControllerBtnProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={close}>
        <Icon iconName="clear" className="size-2.5!" />
      </Button>
      <Separator.Root
        className="h-full w-px bg-light-gray"
        decorative
        orientation="vertical"
      />
      <Button type="submit" className="text-marine-blue">
        START
      </Button>
    </div>
  );
};
