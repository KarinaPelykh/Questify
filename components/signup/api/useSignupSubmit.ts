import { signup } from "@/shared/lib/service";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { SignupData } from "../model/contract";

type UseSignupSubmitProps = {
  reset: UseFormReset<SignupData>;
};

export const useSignupSubmit = ({ reset }: UseSignupSubmitProps) => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
    onSuccess: () => {
      reset();
    },

    onError: (error) => {
      console.log("Signup error:", error);
    },
  });
};
