import { Button, Icon } from "@/shared/ui";
import * as Separator from "@radix-ui/react-separator";

export const ControllerBtn = () => {
  return (
    <div className="flex gap-2">
      <Button>
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
