import { addQuest } from "@/shared/lib/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddQuery = () => {
  const query = useQueryClient();

  return useMutation({
    mutationKey: ["add-card"],
    mutationFn: addQuest,
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["all-cards"] });
    },
  });
};
