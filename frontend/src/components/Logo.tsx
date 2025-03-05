import { FC } from "react";
import { useNavigate } from "react-router";

export const Logo: FC = () => {
  const ngn = useNavigate();
  return (
    <>
      <button
        className="border rounded-2xl p-2 bg-gray-300 text-white font-bold"
        onClick={() => {
          ngn("/");
        }}
      >
        JOB-BOARD
      </button>
    </>
  );
};
