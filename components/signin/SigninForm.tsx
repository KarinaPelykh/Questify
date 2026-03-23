"use client";

import { Button } from "@/shared/ui";
import { Form, Input, FormField, Label } from "@/shared/ui/Form";
import { FormProvider, useForm } from "react-hook-form";
import { useSigninSubmit } from "./api/useSigninSubmit";
import { SigninData } from "./model/contract";

export const SigninForm = () => {
  const form = useForm<SigninData>({
    defaultValues: { email: "", password: "" },
  });

  const { mutate: signin } = useSigninSubmit({ reset: form.reset });
  return (
    <Form
      onSubmit={form.handleSubmit((data) => signin(data))}
      className=" flex flex-col gap-2.5 max-w-[320px]"
    >
      <FormProvider {...form}>
        <FormField name="email">
          <Label>Email</Label>
          <Input
            placeholder="Email"
            id="email"
            type="email"
            {...form.register("email")}
          />
        </FormField>
        <FormField name="password">
          <Label>Password</Label>
          <Input
            placeholder="Password"
            id="password"
            type="password"
            {...form.register("password")}
          />
        </FormField>
        <Button type="submit" variant="secondary" className=" ml-auto e">
          go!
        </Button>
      </FormProvider>
    </Form>
  );
};
