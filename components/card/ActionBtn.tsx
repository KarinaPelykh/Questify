"use client";
import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";
import { Fragment } from "react/jsx-runtime";

import { Button, Icon } from "@/shared/ui";

const icons = ["save", "clear", "done"] as const;

type ActionBtnProps = {
  open: () => void;
  setBtn: (val: "save" | "clear" | "done" | "") => void;
};

export const ActionBtn = ({ setBtn, open }: ActionBtnProps) => {
  return (
    <>
      <div className="w-fit h-2.5 flex gap-2 absolute right-0 bottom-0   transition-all duration-500 ">
        {icons.map((icon, i) => (
          <Fragment key={i}>
            <Button
              type={icon === "done" ? "submit" : "button"}
              onClick={() => {
                setBtn(icon);
                open();
              }}
              key={icon}
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
          </Fragment>
        ))}
      </div>
    </>
  );
};
