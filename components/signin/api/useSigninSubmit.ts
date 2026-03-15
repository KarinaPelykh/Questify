import { signin } from "@/shared/lib/service";
import { useMutation } from "@tanstack/react-query";
import { SigninData } from "../model/contract";
import { UseFormReset } from "react-hook-form";

type UseSigninSubmitProps = {
  reset: UseFormReset<SigninData>;
};

export const useSigninSubmit = ({}: UseSigninSubmitProps) => {
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: signin,
  });
};
