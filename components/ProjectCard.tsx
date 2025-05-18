import Image from "next/image";

interface IProjectCard {
  leftIcon?: JSX.Element;
  title: string;
  subTitle: string;
  disableRightIcon?: boolean;
  textStyles?: string;
  hover?: boolean;
}

const ProjectCard = ({
  leftIcon,
  title,
  subTitle,
  disableRightIcon = false,
  textStyles,
  hover = false,
}: IProjectCard) => {
  return (
    <div
      className={`flex justify-between items-center h-32 px-6 border bg-white rounded-md shadow-sm ${
        hover ? "hover:shadow-xl transition-shadow duration-200" : ""
      }`}
    >
      {leftIcon && <div className="flex-shrink-0 mr-8">{leftIcon}</div>}

      <div className={`flex flex-col gap-2 flex-grow ${textStyles || ""}`}>
        <div className="font-bold">{title}</div>
        <div className="font-medium text-gray-500">{subTitle}</div>
      </div>

      {!disableRightIcon && (
        <div className="flex-shrink-0">
          <Image src="/next.png" width={20} height={20} alt="next icon" />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
