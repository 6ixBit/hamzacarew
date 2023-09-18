const VerticalPipes = ({ numOfPipes }: { numOfPipes: number }) => {
  return (
    <div className="flex flex-col gap-2 pl-4 pb-2">
      {Array.from({ length: numOfPipes }, (_, i) => (
        <p key={i}>|</p>
      ))}
    </div>
  );
};

export default VerticalPipes;
