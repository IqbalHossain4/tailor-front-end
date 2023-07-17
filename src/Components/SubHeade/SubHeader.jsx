import React from "react";

const SubHeader = ({ title, subTitle }) => {
  return (
    <div className="my-16">
      <h1 className="w-full text-center text-xl font-serif font-bold py-1">
        {title}
      </h1>

      <p className="w-full text-center text-md font-serif">{subTitle}</p>
    </div>
  );
};

export default SubHeader;
