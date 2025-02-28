import { FC, useEffect, useRef, useState } from "react";
import "./../App.css";
import { SigninButton, SignupButton } from "../components/Button";

const HomePage: FC = () => {
  const cursorPointerRef: HTMLDivElement | undefined = useRef(null);

  useEffect(() => {
    // we can also use the queryselector
    const cursor: HTMLDivElement | undefined = cursorPointerRef.current;

    function moveMouse(e: MouseEvent) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("movemouse", moveMouse);
    };
  }, []);

  return (
    <div>
      <div className="border h-[2000px] bg-gradient-to-r from-black from-0% to-white to-160% relative ">
        <div className="h-[50px] flex items-center justify-end gap-4 mt-2 mr-5 sticky top-3 ">
          <SignupButton />
          <SigninButton />
        </div>
        <h1 className="bebas-neue-regular text-[250px] mt-10 ml-30 text-white cursor-grab select-none ">
          JOB-BAZZAR
        </h1>
      </div>
      <div ref={cursorPointerRef} className="cursor "></div>
    </div>
  );
};

export default HomePage;
