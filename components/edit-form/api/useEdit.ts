import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editQuest } from "@/shared/lib/service";

export const useEdit = () => {
  const query = useQueryClient();

  return useMutation({
    mutationKey: ["edit"],
    mutationFn: editQuest,
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["all-quests"] });
    },
  });
};
