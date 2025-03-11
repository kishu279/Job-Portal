import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Logo } from "./Logo";
import { Signin, Signout, Signup } from "./Button";

export default function SideBar() {
  return (
    <div className="h-20 shadow-lg dispay place-items-center flex justify-around">
      <Logo />
      <span>
        <input
          type="text"
          placeholder="search..."
          className="border p-2 rounded-2xl w-[300px]"
        />
      </span>

      <SignedOut>
        <Signup />
        <Signin />
      </SignedOut>

      <SignedIn>
        <div className=" flex w-[140px] justify-between mr-5 ">
          <UserButton />
          <Signout />
        </div>
      </SignedIn>
    </div>
  );
}
