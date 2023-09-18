const SubContentContainer = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col border bg-gray-100 rounded-md w-full">
      {title && <p className="font-medium my-2 px-2">{title}</p>}
      {children}
    </div>
  );
};

export default SubContentContainer;
