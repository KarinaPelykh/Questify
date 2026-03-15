import * as v from "valibot";

export const SigninSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is incorrect."),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your password."),
    v.minLength(8, "Your password must have 8 characters or more."),
    v.maxLength(32, "Your password must have 32characters or less."),
  ),
});

export type SigninData = v.InferOutput<typeof SigninSchema>;
