import clsx from "clsx";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={clsx(
        "text-marine-blue text-m mr-auto tablet-l:text-2xl transition-colors duration-500 hover:text-orange",
        className,
      )}
    >
      Questify
    </Link>
  );
};
