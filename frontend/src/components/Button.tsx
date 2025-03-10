import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { FC } from "react";

const Signin: FC = () => {
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

export { Signin, Signup };
