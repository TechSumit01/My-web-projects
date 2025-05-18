import React, { useState } from "react";

const Login = () => {
  const [toggleLogin, setToggleLogin] = useState(false);

  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-14 m-auto gap-6 sm:w-[80%] ">
        <h2 className="text-2xl text-black  ">
          {toggleLogin ? "SIGNUP " : "LOGIN"}
        </h2>
        <div className=" items-center">
          <form
            className=" flex flex-col items-center gap-4 w-full "
            action="#"
          >
            <input
              type="text "
              placeholder="Enter your name"
              className={` border border-gray-600  py-3 px-8 w-full  ${
                toggleLogin ? "block" : " hidden"
              }`}
            />

            <input
              className="border border-gray-600  py-3 px-8 w-full  "
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className=" border border-gray-600 py-3 px-8 w-full  "
              type="password"
              name="email"
            />
          </form>
          <div className="flex justify-between  my-4 ">
            <p className=" cursor-pointer text-sm text-gray-600 font-medium ">
              Forget Password ?
            </p>
            <p
              onClick={() => setToggleLogin(!toggleLogin)}
              className="cursor-pointer text-sm text-gray-600 font-medium"
            >
              {toggleLogin ? "Login" : " Create Account"}
            </p>
          </div>
          <button className=" mr-8 items-center border border-gray-500 py-2 px-8 text-base hover:bg-black hover:text-white ">
            {toggleLogin ? " SignUp" : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
