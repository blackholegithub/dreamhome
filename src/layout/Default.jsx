
const Default = ({ children, md, lg, title, des }) => {
  console.log("md", md)
  return (
    <div className="flex  flex-col items-center ">
      <div className="md:px-10">
        <h2 className="text-center font-bold text-5xl">{title}</h2>
        <p className="text-center text-lg text-[#8E8E93]">{des}</p>
      </div>
      <div className={`w-full ${md && 'md:w-95'} ${lg && 'md:w-3/4'}`}>{children}</div>
    </div>
  );
};

export default Default;
