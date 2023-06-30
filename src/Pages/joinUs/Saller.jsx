import React from "react";

const Saller = () => {
  return (
    <div className="w-full h-full flex items-center justify-center my-24">
      <div className=" border p-16">
        <form>
          <div className="flex flex-col">
            <div className="md:flex items-center">
              <div className="input-container flex flex-col">
                <input
                  placeholder="First Name"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">First Name</label>
                <span className="input-highlight"></span>
              </div>

              <div className="input-container flex flex-col">
                <input
                  placeholder="Last Name"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Last Name</label>
                <span className="input-highlight"></span>
              </div>
            </div>

            <div className="md:flex items-center">
              <div className="input-container flex flex-col">
                <input
                  placeholder="Company Name"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Company Name</label>
                <span className="input-highlight"></span>
              </div>

              <div className="input-container flex flex-col">
                <input
                  placeholder="Categorie"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Categorie</label>
                <span className="input-highlight"></span>
              </div>
            </div>

            <div className="md:flex items-center">
              <div className="input-container flex flex-col">
                <input
                  placeholder="Email"
                  className="input-field"
                  type="email"
                />
                <label className="input-label">Email</label>
                <span className="input-highlight"></span>
              </div>

              <div className="input-container flex flex-col">
                <input
                  placeholder="Password"
                  className="input-field"
                  type="password"
                />
                <label className="input-label">Password</label>
                <span className="input-highlight"></span>
              </div>
            </div>
            <div className="input-container">
              <label className="">Upload Photo</label>
              <input type="file" className="input-field" />
            </div>
          </div>
          <div className="input-container bg-black text-white transition-all ease-in-out delay-150  hover:bg-[#d1d8ec] hover:text-black font-semibold mb-24">
            <input className="input-field " type="submit" value="Submit" />
          </div>
        </form>
        <p className="input-container text-[13px]">
          New users?{" "}
          <span className="text-[15px] font-semibold text-green-400">
            Join Us
          </span>
        </p>
        <div className="input-container  text-center text-[20px] font-bold border border-green-400">
          G
        </div>
      </div>
    </div>
  );
};

export default Saller;
