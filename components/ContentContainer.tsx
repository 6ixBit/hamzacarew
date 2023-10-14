const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-max bg-white rounded-md shadow w-96 md:w-tablet flex flex-col p-6">
      {children}
    </div>
  );
};

export default ContentContainer;
