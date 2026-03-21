import * as v from "valibot";

export const SignupSchema = v.object({
  name: v.pipe(
    v.string("Please enter your name."),
    v.nonEmpty("Please enter your name."),
  ),
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

export const SignupResponseSchema = v.object({
  user: v.object({
    id: v.string(),
    email: v.string(),
  }),

  accessToken: v.string(),
});

export const RefreshResponseSchema = v.object({
  accessToken: v.string(),
});

export const CurrentUserSchema = v.omit(SignupSchema, ["password"]);

export type CurrentUser = v.InferOutput<typeof CurrentUserSchema>;
export type SignupData = v.InferOutput<typeof SignupSchema>;
export type SignupResponse = v.InferOutput<typeof SignupResponseSchema>;
export type RefreshResponse = v.InferOutput<typeof RefreshResponseSchema>;
