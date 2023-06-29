import React from "react";
const Buyer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form>
        <div className="flex flex-col">
          <div className=" flex items-center">
            <div className="input-container flex flex-col">
              <input
                placeholder="Enter text"
                className="input-field"
                type="text"
              />
              <label className="input-label">Enter text</label>
              <span className="input-highlight"></span>
            </div>

            <div className="input-container flex flex-col">
              <input
                placeholder="Enter text"
                className="input-field"
                type="text"
              />
              <label className="input-label">Enter text</label>
              <span className="input-highlight"></span>
            </div>
          </div>
          <label className="">Username</label>
          <input required="" type="text" name="text" className="input" />
          <label className="">Username</label>
        </div>
      </form>
    </div>
  );
};

export default Buyer;
