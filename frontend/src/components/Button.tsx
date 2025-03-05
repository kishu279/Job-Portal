import { FC } from "react";
import { useNavigate } from "react-router";

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

const LogOutButton: FC = () => {
  const ngn = useNavigate();
  return (
    <>
      <button
        className="border p-2 rounded-2xl"
        onClick={() => {
          localStorage.removeItem("auth-key");
          ngn("/");
        }}
      >
        Logout
      </button>
    </>
  );
};
export { SignupButton, SigninButton, LogOutButton };
