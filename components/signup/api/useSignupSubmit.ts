import { signup } from "@/shared/lib/service";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { SignupData } from "../model/contract";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

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
