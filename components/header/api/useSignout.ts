import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { signout } from "@/shared/lib/service";

export const useSignout = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["signout"],
    mutationFn: signout,
    onSuccess: () => {
      router.push("/");
    },
  });
};
