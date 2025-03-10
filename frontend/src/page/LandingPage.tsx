import { FC, useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import axios, { AxiosError } from "axios";
import "../App.css";
import { SignOutButton } from "@clerk/clerk-react";

const LandingPage: FC = () => {
  const [sideBar, setSideBar] = useState(true);
  const token = localStorage.getItem("auth-token");
  const [loading, setLoading] = useState(true);

  async function handleProfile() {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
    } catch (err: AxiosError) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!token) {
      throw new Error("Token not found");
    }

    handleProfile();
  }, []);

  return (
    <>
      <div className={`${loading ? "blur-lg cursor-none" : ""}`}>
        <div className="h-20 shadow-lg dispay place-items-center flex justify-around">
          <Logo />
          <span>
            <input
              type="text"
              placeholder="search..."
              className="border p-2 rounded-2xl w-[300px]"
            />
          </span>
          <SignOutButton />
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
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default LandingPage;
