import { Button, Icon } from "@/shared/ui";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-night-blue py-3.75 tablet-l:py-4.75">
      <nav className="container flex">
        <Link
          href="/"
          className="text-marine-blue text-m mr-auto tablet-l:text-2xl "
        >
          Questify
        </Link>

        <div className="size-7.5 mr-3 bg-midnight-blue rounded-full flex justify-center items-center text-white tablet-l:mr-auto ">
          D
        </div>
        <Button className="mr-3 size-7.5 tablet-l:mr-10 rounded-full bg-marine-blue! flex justify-center items-center">
          <Icon className="size-3.5!" iconName="challenge" />
        </Button>
        <Button className="mr-3">
          <Icon className="w-5.5 h-[16.05px]" iconName="logout" />
        </Button>
      </nav>
    </header>
  );
};
