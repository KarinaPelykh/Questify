import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editQuest } from "@/shared/lib/service";

type UseEditProps = { close: () => void };

export const useEdit = ({ close }: UseEditProps) => {
  const query = useQueryClient();

  return useMutation({
    mutationKey: ["edit"],
    mutationFn: editQuest,
    onSuccess: () => {
      close();
      query.invalidateQueries({ queryKey: ["all-quests"] });
    },
  });
};
