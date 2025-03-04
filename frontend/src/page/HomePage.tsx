import { FC } from "react";
import { SigninButton, SignupButton } from "../components/Button";
import "./../App.css";
import { Outlet } from "react-router";

const HomePage: FC = () => {
  return (
    <>
      <div className="border h-[2000px] bg-gradient-to-r from-black from-0% via-60% to-150% to-white">
        <div className="flex justify-end gap-4 mr-4 sticky top-5">
          <SignupButton />
          <SigninButton />
        </div>
        <div className="absolute">
          <h1 className=" bebas-neue-regular text-[250px] text-gray-300 mt-20 ml-40">
            JOB-BAZZAR
          </h1>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
