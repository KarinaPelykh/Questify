import { Logo, Form, Button } from "@/shared/ui";
import { Input, ItemForm, Label } from "@/shared/ui/Form";
import Link from "next/link";
import css from "../background.module.css";
import clsx from "clsx";
export default function LoginPage() {
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
          <Link
            href="/"
            className=" underline transition-all duration-500  hover:text-night-blue"
          >
            sign up
          </Link>{" "}
          or{" "}
          <Link
            href="/login"
            className=" underline transition-all duration-500 hover:text-night-blue"
          >
            log in
          </Link>
        </p>
        <Form className=" flex flex-col gap-2.5 max-w-[320px]">
          <ItemForm className="flex flex-col">
            <Label>Email</Label>
            <Input placeholder="Email" />
          </ItemForm>
          <ItemForm className="flex flex-col">
            <Label>Password</Label>
            <Input placeholder="Password" />
          </ItemForm>
          <Button className="rounded-full text-white bg-orange! size-13 ml-auto shadow-orange">
            go!
          </Button>
        </Form>
      </div>
    </section>
  );
}
