import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { UseFormReset } from "react-hook-form";

import { useAuth } from "@/providers/AuthProvider";
import { signin } from "@/shared/lib/service";

import { SigninData } from "../model/contract";

type UseSigninSubmitProps = {
  reset: UseFormReset<SigninData>;
};

export const useSigninSubmit = ({ reset }: UseSigninSubmitProps) => {
  const { setAccessToken } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationKey: ["signin"],
    mutationFn: signin,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      reset();
      router.push("/dashboard");
    },
  });
};
