import clsx from "clsx";

import { SignupForm } from "@/components/signup/SignupForm";
import { AppLink,Logo } from "@/shared/ui";

import css from "./background.module.css";

export default function Home() {
  return (
    <section
      className={clsx(
        "relative size-full pt-10 h-screen w-full desktop-l:px-25.25 desktop-l:pt-51",
        css.hero,
      )}
    >
      <div className="container">
        <Logo className="text-3xl! mb-10 inline-block" />

        <h1 className="text-m text-dark-blue mb-8 tablet-l:w-128.75 tablet-l:text-4xl">
          Questify will turn your life into a thrilling game full of amazing
          quests and exciting challenges.
        </h1>
        <p className="text-light-gray text-xs mb-6">
          Choose your name to{" "}
          <AppLink href="/" className="underline   hover:text-night-blue">
            sign up
          </AppLink>{" "}
          or{" "}
          <AppLink href="/login" className=" underline  hover:text-night-blue">
            log in
          </AppLink>
        </p>
        <SignupForm />
      </div>
    </section>
  );
}
