import { signin } from "@/shared/lib/service";
import { useMutation } from "@tanstack/react-query";
import { SigninData } from "../model/contract";
import { UseFormReset } from "react-hook-form";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

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
