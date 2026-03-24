"use client";
import { Button, Icon } from "@/shared/ui";
import clsx from "clsx";
import * as Separator from "@radix-ui/react-separator";

const icons = ["save", "clear", "done"];

type ActionBtnProps = {
  open: () => void;
};

export const ActionBtn = ({ open }: ActionBtnProps) => {
  return (
    <>
      <div className="w-fit h-2.5 flex opacity-0 gap-2 absolute right-0 bottom-0   transition-all duration-500 group-hover:opacity-100">
        {icons.map((icon, i) => (
          <>
            <Button
              onClick={() => icon === "clear" && open()}
              key={icon}
              type="button"
              variant="primary"
            >
              <Icon
                iconName={icon}
                className={clsx(
                  "size-2.5!",
                  icon === "done" && "w-3.5! h-2.5!",
                )}
              />
            </Button>

            <Separator.Root
              className={clsx(
                "h-full w-px bg-light-gray",
                icons.length - 1 === i && "hidden",
              )}
              decorative
              orientation="vertical"
            />
          </>
        ))}
      </div>
    </>
  );
};
