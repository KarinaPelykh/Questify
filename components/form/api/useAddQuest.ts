import { addQuest } from "@/shared/lib/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { Quest } from "../model/contract";

type useAddQueryProps = {
  reset: UseFormReset<Quest>;
};

export const useAddQuery = ({ reset }: useAddQueryProps) => {
  const query = useQueryClient();

  return useMutation({
    mutationKey: ["add-card"],
    mutationFn: addQuest,
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["all-quests"] });
      reset();
    },
  });
};
