import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { UseFormReset } from "react-hook-form";

import { useAuth } from "@/providers/AuthProvider";
import { signup } from "@/shared/lib/service";

import { SignupData } from "../model/contract";

type UseSignupSubmitProps = {
  reset: UseFormReset<SignupData>;
};

export const useSignupSubmit = ({ reset }: UseSignupSubmitProps) => {
  const { setAccessToken } = useAuth();

  const router = useRouter();
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
    onSuccess: (data) => {
      reset();
      setAccessToken(data.accessToken);
      router.push("/dashboard");
    },

    onError: (error) => {
      console.log("Signup error:", error);
    },
  });
};
