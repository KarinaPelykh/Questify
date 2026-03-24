import { useQuery } from "@tanstack/react-query";

import { currentUser } from "@/shared/lib/service";

export const useGetCurrentUser = (token?: string) => {
  return useQuery({
    queryKey: ["current"],
    queryFn: currentUser,
    enabled: token === "" ? false : true,
  });
};
