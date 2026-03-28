"use client";
import { QuestList } from "@/components/card/QuestList";
import { FormCard } from "@/components/form/Form";
import { useToggle } from "@/shared/hook/useToggle";
import { Button, Icon } from "@/shared/ui";
import { Dialog } from "@/shared/ui/Dialog";

export const Dashboard = () => {
  const { isOpen, close, open } = useToggle();

  return (
    <section className=" w-full max-h-full min-h-screen bg-light-white py-7 ">
      <div className="container ">
        <h1 className="mb-4.5 text-xs">TODAY</h1>
        <div className="flex gap-4 flex-col tablet-l:flex-row tablet-l:flex-wrap">
          {isOpen && (
            <Dialog>
              <FormCard close={close} />
            </Dialog>
          )}

          <QuestList />
          <Button
            onClick={open}
            type="button"
            variant="secondary"
            className="fixed bottom-10 right-7"
          >
            <Icon iconName="plus" className="size-4!" />
          </Button>
        </div>
      </div>
    </section>
  );
};
