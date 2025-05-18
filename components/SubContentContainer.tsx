const SubContentContainer = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col border bg-gray-100 rounded-md w-full">
      {title && (
        <div className="border-b border-gray-200">
          <p className="font-medium py-3 px-4">{title}</p>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default SubContentContainer;
