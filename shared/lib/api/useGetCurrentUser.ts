import { currentUser } from "@/shared/lib/service";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = (token?: string) => {
  return useQuery({
    queryKey: ["current"],
    queryFn: currentUser,
    enabled: token === "" ? false : true,
  });
};
