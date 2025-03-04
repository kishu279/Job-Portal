import { FC } from "react";
import { Navigation, NavigationType, useNavigate } from "react-router";

const SignupButton: FC = () => {
  const ngn = useNavigate();
  return (
    <span className="text-white w-[70px] bebas-neue-regular -skew-x-15 border-2 p-1 ">
      <p
        className="skew-x-15 text-[20px] text-center cursor-pointer select-none"
        onClick={() => {
          ngn("/register");
        }}
      >
        SIGNUP
      </p>
    </span>
  );
};

const SigninButton: FC = () => {
  const ngn = useNavigate();
  return (
    <span className="text-white w-[70px] bebas-neue-regular border-2 p-1 -skew-x-15">
      <p
        className="skew-x-15 text-[20px] text-center cursor-pointer select-none"
        onClick={() => {
          ngn("/login");
        }}
      >
        SIGNIN
      </p>
    </span>
  );
};

export { SignupButton, SigninButton };
