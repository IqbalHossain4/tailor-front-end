import React from "react";

const SubHeader = ({ title, subTitle }) => {
  return (
    <div className="my-16">
      <h1 className="w-full text-center text-2xl font-sans font-bold mb-4 underline py-4">
        {title}
      </h1>

      <p className="w-full text-center text-sm font-sans">{subTitle}</p>
    </div>
  );
};

export default SubHeader;
