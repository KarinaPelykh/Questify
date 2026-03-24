"use client";

import { useGetCurrentUser } from "@/shared/lib/api/useGetCurrentUser";
import { Button, Icon, Logo } from "@/shared/ui";

import { useSignout } from "./api/useSignout";

export const Header = () => {
  const { mutate: signout } = useSignout();

  const { data } = useGetCurrentUser();

  return (
    <header className="bg-night-blue py-3.75 tablet-l:py-4.75">
      <nav className="container flex">
        <Logo />
        <div className="flex justify-center items-center tablet-l:mr-auto ">
          <div className="size-7.5 mr-3 bg-midnight-blue rounded-full flex justify-center items-center text-white ">
            {data?.name.slice(0, 1)}
          </div>
          <span className=" text-gray  text-m font-normal max-tablet-l:hidden ">
            {data?.name}’s Quest Log
          </span>
        </div>

        <Button className="mr-3 size-7.5 tablet-l:mr-10 rounded-full bg-marine-blue! flex justify-center items-center">
          <Icon className="size-3.5!" iconName="challenge" />
        </Button>
        <Button className="mr-3" onClick={() => signout()}>
          <Icon className="w-5.5 h-[16.05px]" iconName="logout" />
        </Button>
      </nav>
    </header>
  );
};
