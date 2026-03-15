import { useMutation } from "@tanstack/react-query";
import { refresh } from "../service";

export const useRefresh = () => {
  //   const { setAccessToken } = useAuth();

  return useMutation({
    mutationKey: ["refresh"],
    mutationFn: refresh,
  });
};
