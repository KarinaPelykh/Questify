"use client";

import { Form, Button } from "@/shared/ui";
import { ErrorMessage, Input, FormField, Label } from "@/shared/ui/Form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormProvider, useForm } from "react-hook-form";
import { SignupData, SignupSchema } from "./model/contract";
import { useSignupSubmit } from "./api/useSignupSubmit";

export const SignupForm = () => {
  const form = useForm<SignupData>({
    defaultValues: { name: "", email: "", password: "" },
    resolver: valibotResolver(SignupSchema),
  });

  const { mutate: signup } = useSignupSubmit({ reset: form.reset });

  return (
    <Form
      onSubmit={form.handleSubmit((data) => signup(data))}
      className=" flex flex-col gap-2.5 max-w-[320px]"
    >
      <FormProvider {...form}>
        <FormField name="name">
          <Label>Name</Label>
          <Input
            placeholder="John"
            id="name"
            type="text"
            {...form.register("name")}
          />
          <ErrorMessage />
        </FormField>
        <FormField name="email">
          <Label>Email</Label>
          <Input
            placeholder="Email"
            id="email"
            type="email"
            {...form.register("email")}
          />
          <ErrorMessage />
        </FormField>
        <FormField name="password">
          <Label>Password</Label>
          <Input
            placeholder="Password"
            id="password"
            type="password"
            {...form.register("password")}
          />
          <ErrorMessage />
        </FormField>
        <Button
          type="submit"
          className="rounded-full text-white bg-orange! size-13 ml-auto shadow-orange"
        >
          go!
        </Button>
      </FormProvider>
    </Form>
  );
};
