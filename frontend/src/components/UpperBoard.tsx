import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Logo } from "./Logo";
import { Signout } from "./Button";

export default function UpperBoard({ page }: { page: string }) {
  // console.log(isSignedIn);

  return (
    <>
      <div className="h-20 shadow-lg display flex items-center justify-around ">
        <Logo />

        <div className="text-4xl font-mono">{page}</div>

        <SignedIn>
          <div className=" flex w-[140px] justify-between mr-5 ">
            <UserButton />
            <Signout />
          </div>
        </SignedIn>
      </div>
    </>
  );
}
