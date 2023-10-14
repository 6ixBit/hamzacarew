import Image from "next/image";

interface IProjectCard {
  leftIcon: JSX.Element;
  title: string;
  subTitle: string;
  disableRightIcon?: boolean;
  textStyles?: string;
}

const ProjectCard = ({
  leftIcon,
  title,
  subTitle,
  disableRightIcon = false,
  textStyles,
}: IProjectCard) => {
  return (
    <div className="flex justify-between border bg-white rounded-md items-center h-20 px-1 shadow-lg">
      <div className="pl-2 md:pl-12 rounded-full">{leftIcon}</div>

      <div className={`flex flex-col gap-2 mx-auto ${textStyles || ""}`}>
        <div className="font-bold">{title}</div>
        <div className="font-medium text-gray-500">{subTitle}</div>
      </div>

      {!disableRightIcon && (
        <div className="pr-2">
          <Image src="/next.png" width={20} height={20} alt="next icon" />
        </div>
      )}
    </div>
  );
};
export default ProjectCard;
