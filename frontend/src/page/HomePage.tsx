import { FC, useEffect, useState } from "react";
import {
  Signin,
  SigninButton,
  Signup,
  SignupButton,
} from "../components/Button";
import "./../App.css";
import { Outlet } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

const motivationSpeech = [
  "Every expert was once a beginner — keep pushing forward!",
  "Success is the sum of small efforts, repeated daily.",
  "Doubt kills more dreams than failure ever will.",
  "Your skills and determination are your greatest assets — use them wisely!",
  "A rejection is just redirection — your perfect job is waiting for you.",
  "Opportunities don't happen, you create them.",
  "The job you want is waiting for the best version of you — keep leveling up!",
  "Work hard in silence, let your success make the noise.",
  "Don't stop when you're tired. Stop when you're done.",
  "You're not just looking for a job; you're building your future!",
];

const HomePage: FC = () => {
  const [currentSpeech, setCurrentSpeech] = useState(motivationSpeech[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * motivationSpeech.length);

      setCurrentSpeech(motivationSpeech[randomIndex]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="border h-screen bg-gradient-to-r from-black from-0% via-60% to-150% to-white">
        <div className="flex justify-end gap-4 mr-4 sticky top-5">
          {/* <SignupButton />
          <SigninButton /> */}
          <SignedOut>
            <Signup />
            <Signin />
          </SignedOut>

          <SignedIn>
            <UserButton />
            <SignOutButton />
          </SignedIn>
        </div>
        <div className="absolute select-none">
          <h1 className=" bebas-neue-regular text-[250px] text-gray-300 mt-20 ml-40">
            JOB-BAZZAR
          </h1>
          <div className=" h-[200px] w-[900px] ml-[15%] -mt-25 ">
            <p className="text-gray-400 font-extralight font-mono text-[30px] ">
              {currentSpeech}
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
