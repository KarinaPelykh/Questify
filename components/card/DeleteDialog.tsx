import { Button } from "@/shared/ui";
import { useDeleteQuest } from "./api/useDeleteQuest";
import { useQuestContext } from "./QuestContext";
import * as Separator from "@radix-ui/react-separator";
import { Dialog } from "@/shared/ui/Dialog";

type DeleteDialogProps = {
  close: () => void;
};

export const DeleteDialog = ({ close }: DeleteDialogProps) => {
  const { mutate: deleteQuest } = useDeleteQuest();

  const { questId } = useQuestContext();

  return (
    <Dialog className="bg-[#15395a4c] z-10 absolute top-0 left-0 size-full flex justify-center items-center rounded-xs">
      <div className="bg-white rounded-xs w-40.75 h-19.25 flex flex-col justify-center items-center">
        <p className="mb-3 text-caption">Delete this Quest?</p>
        <div className="flex gap-2 justify-center items-center">
          <Button
            onClick={close}
            className="text-bright-green text-caption font-bold"
          >
            Cancel
          </Button>
          <Separator.Root
            className="h-full w-px bg-light-gray"
            decorative
            orientation="vertical"
          />
          <Button
            onClick={() => deleteQuest(questId)}
            type="submit"
            className="text-red  text-caption font-bold"
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
