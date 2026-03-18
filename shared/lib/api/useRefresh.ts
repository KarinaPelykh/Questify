import { useMutation } from "@tanstack/react-query";
import { refresh } from "../service";

export const useRefresh = () => {
  return useMutation({
    mutationKey: ["refresh"],
    mutationFn: refresh,
  });
};
