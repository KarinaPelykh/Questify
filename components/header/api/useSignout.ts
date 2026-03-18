import { signout } from "@/shared/lib/service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
