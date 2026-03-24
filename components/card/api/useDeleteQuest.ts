import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteQuest } from "@/shared/lib/service";

export const useDeleteQuest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete"],
    mutationFn: deleteQuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-quests"] });
    },
  });
};
