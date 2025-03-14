import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Logo } from "./Logo";
import { Signout } from "./Button";
import { DashboardUserDetails } from "../page/DashboardDetails";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

export default function UpperBoard({ page }: { page: string }) {
  // console.log(isSignedIn);

  return (
    <>
      <div className="h-20 shadow-lg display flex items-center justify-around ">
        <Logo />

        <div className="text-4xl font-mono">{page}</div>

        {/*This contains Custom Pages*/}
        <SignedIn>
          <div className=" flex w-[140px] justify-between mr-5 ">
            <UserButton>
              <UserButton.MenuItems>
                {/* <UserButton.Action
                  label="Open Chat"
                  labelIcon={<DotIcon />}
                  onClick={() => {
                    alert("Init Chat");
                  }}
                /> */}

                <UserButton.Action
                  label="Help"
                  labelIcon={<DotIcon />}
                  open="help"
                />
                <UserButton.Action
                  label="User Details"
                  labelIcon={<DotIcon />}
                  open="userDetails"
                />
              </UserButton.MenuItems>

              <UserButton.UserProfilePage
                label="Help"
                labelIcon={<DotIcon />}
                url="help"
              >
                <div className="font-bold">Help Desk</div>
                <hr className="text-gray-200 mt-4"/>
                <div className="text-[14px]">Input Box</div>
              </UserButton.UserProfilePage>

              <UserButton.UserProfilePage
                label="User Details"
                labelIcon={<DotIcon />}
                url="userDetails"
              >
                <DashboardUserDetails />
                {/* DASHBOARD DETAILS PAGE WILL BE RENDERED */}
              </UserButton.UserProfilePage>
            </UserButton>
            <Signout />
          </div>
        </SignedIn>
      </div>
    </>
  );
}
