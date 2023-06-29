import React from "react";
import { useForm } from "react-hook-form";

const Saller = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="border rounded ps-2 mr-4 "
        />
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="border rounded ps-2 "
        />{" "}
        <br />
        <input type="submit" className="w-full text-center" />
      </form>
    </div>
  );
};

export default Saller;
