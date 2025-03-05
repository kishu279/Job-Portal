import { FC, useState } from "react";
import { LogOutButton } from "../components/Button";
import { Logo } from "../components/Logo";

const LandingPage: FC = () => {
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      <div className="">
        <div className="h-20 shadow-lg dispay place-items-center flex justify-around">
          <Logo />
          <span className="border">
            <input type="text" placeholder="search..." />
          </span>
          <LogOutButton />
        </div>

        <div>
          <div
            className={`border border-gray-200 h-[847px] ${
              sideBar ? "w-[300px] shadow-2xl" : "w-[0px]"
            }`}
          >
            <button
              className={"material-symbols-outlined mt-2 ml-2"}
              onClick={() => {
                setSideBar((prev) => !prev);
              }}
            >
              {sideBar ? "left_panel_close" : "left_panel_open"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
