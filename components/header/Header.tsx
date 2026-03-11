import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#] py-3.75 px-5">
      <nav>
        <Link href="/" className="text-marine-blue font-bold ">
          Questify
        </Link>
        <div className="size-7.5 bg-midnight-blue rounded-full flex justify-center items-center text-white">
          D
        </div>
        <Button>
          <Icon iconName="challenge" />
        </Button>
        <Button>
          <Icon iconName="logout" />
        </Button>
      </nav>
    </header>
  );
};
