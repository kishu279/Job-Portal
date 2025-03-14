import { SignInButton, SignOutButton, SignUpButton } from "@clerk/clerk-react";
import { FC } from "react";
import { useNavigate } from "react-router";
import "./../App.css";

const Signin: FC = () => {
  // on signing in it takes the token

  return (
    <span className="border-2 p-1 w-[70px] bebas-neue-regular text-gray-300 -skew-x-12">
      <div className="text-center text-[20px] skew-x-12">
        <SignInButton />
      </div>
    </span>
  );
};

const Signup: FC = () => {
  return (
    <span className="w-[70px] bebas-neue-regular bebas-neue-regular border-2 p-1 text-gray-300 -skew-x-12 ">
      <div className="text-center text-[20px] skew-x-12 ">
        <SignUpButton />
      </div>
    </span>
  );
};

const Signout: FC = () => {
  return (
    <span className="border-2 w-[80px] text-gray-300 text-2xl p-1 bebas-neue-regular -skew-x-12 ">
      <div className="text-center text-[20px] skew-x-12">
        <SignOutButton />
      </div>
    </span>
  );
};

const DashBoardButton: FC = () => {
  const navigation = useNavigate();

  return (
    <div className="border-2 text-white w-[190px] h-[70px] text-2xl bebas-neue-regular skew-x-12 classDashNext text-center">
      <button
        className="text-center text-[40px] -skew-x-12 w-[190px] h-[70px]  p-2"
        onClick={() => {
          navigation("/dashboard");
        }}
      >
        DashBoard
      </button>
    </div>
  );
};

const JobButton: FC = () => {
  const navigation = useNavigate();
  return (
    <div className="border-2 w-[190px] h-[70px] text-white text-2xl bebas-neue-regular -skew-x-12 classDashNext text-center">
      <button
        onClick={() => {
          navigation("/job-board");
        }}
        className="text-[40px] skew-x-12 w-[190px] h-[70px] p-2"
      >
        Next
      </button>
    </div>
  );
};

export { Signin, Signup, DashBoardButton, JobButton, Signout };
