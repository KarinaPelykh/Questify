import clsx from "clsx";

type IconProps = {
  className?: string;
  iconName: string;
};

export const Icon = ({ className, iconName }: IconProps) => {
  return (
    <svg className={clsx(className, "size-7.5")}>
      <use href={`/sprite.svg#${iconName}`}></use>
    </svg>
  );
};
