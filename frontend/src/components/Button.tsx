import { FC } from "react";

const SignupButton: FC = () => {
  return (
    <span className="text-white w-[70px] bebas-neue-regular -skew-x-15 border-2 p-1 ">
      <p className="skew-x-15 text-[20px] text-center cursor-pointer select-none">
        SIGNUP
      </p>
    </span>
  );
};

const SigninButton: FC = () => {
  return (
    <span className="text-white w-[70px] bebas-neue-regular border-2 p-1 -skew-x-15">
      <p className="skew-x-15 text-[20px] text-center cursor-pointer select-none">
        SIGNIN
      </p>
    </span>
  );
};

export { SignupButton, SigninButton };
