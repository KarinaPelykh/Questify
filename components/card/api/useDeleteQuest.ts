import { deleteQuest } from "@/shared/lib/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
