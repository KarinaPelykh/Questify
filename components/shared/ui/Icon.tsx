import clsx from "clsx";
import icon from "./public/sprite.svg";
type IconProps = {
  className?: string;
  iconName: string;
};

export const Icon = ({ className, iconName }: IconProps) => {
  return (
    <svg className={clsx(className, "size-7.5")}>
      <use xlinkHref={icon + ` #${iconName}`}></use>
    </svg>
  );
};
