import Image from "next/image";

interface IProjectCard {
  leftIcon: JSX.Element;
  title: string;
  subTitle: string;
}

const ProjectCard = ({ leftIcon, title, subTitle }: IProjectCard) => {
  return (
    <div className="flex justify-between border bg-white rounded-md items-center h-20 px-1 shadow-lg">
      <div className="pl-2 rounded-full">{leftIcon}</div>

      <div className="flex flex-col gap-2 pr-2">
        <div className="font-bold">{title}</div>
        <div className="font-medium text-gray-500">{subTitle}</div>
      </div>
      <div className="pr-1">
        <Image src="/next.png" width={20} height={20} alt="next icon" />
      </div>
    </div>
  );
};

export default ProjectCard;