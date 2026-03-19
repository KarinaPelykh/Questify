import { Icon } from "@/shared/ui";

export const Card = () => {
  return (
    <article className="bg-white rounded-xs p-5 tablet-l:w-56 tablet-l:h-52">
      <div className="flex justify-between items-center mb-17">
        <p className="text-light-gray text-base">Hard</p>
        <Icon iconName="star" className="size-4.75" />
      </div>
      <div className="flex items-center flex-col mb-12.25">
        <h2 className="text-xl mb-3">Submit Report</h2>
        <span className=" text-light-gray text-m font-normal flex items-center">
          Today, 7:30 <Icon iconName="fire" className="w-3 h-4.5 ml-1.75" />
        </span>
      </div>

      <div className="w-30 p-2.5 pl-5.25 bg-green rounded-tr-m rounded-br-m">
        Work
      </div>
    </article>
  );
};
