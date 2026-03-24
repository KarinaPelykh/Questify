"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormProvider, useForm } from "react-hook-form";

import { Button,Form } from "@/shared/ui";
import { ErrorMessage, FormField, Input, Label } from "@/shared/ui/Form";

import { useSignupSubmit } from "./api/useSignupSubmit";
import { SignupData, SignupSchema } from "./model/contract";

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
        <Button type="submit" variant="secondary" className="  ml-auto ">
          go!
        </Button>
      </FormProvider>
    </Form>
  );
};
