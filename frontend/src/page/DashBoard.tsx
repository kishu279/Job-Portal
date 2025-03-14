import { useAuth } from "@clerk/clerk-react";
import UpperBoard from "../components/UpperBoard";
import { useState } from "react";
import "./../App.css";

// import { UserButton } from "@clerk/clerk-react";
// const DotIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 512 512"
//       fill="currentColor"
//     >
//       <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
//     </svg>
//   );
// };

// const DashBoard = () => {
//   return (
//     <>
//       <div>
//         <h1>Dashboard</h1>
//         <UserButton>
//           <UserButton.MenuItems>
//             {/* <UserButton.Action label="manageAccount" /> */}
//             <UserButton.Action
//               label="Open Chat"
//               labelIcon={<DotIcon />}
//               onClick={() => {
//                 alert("init chat");
//               }}
//             />
//             <UserButton.Link
//               label="Create Orgainization"
//               labelIcon={<DotIcon />}
//               href="/create-orgainization"
//             />
//           </UserButton.MenuItems>

//           <UserButton.UserProfilePage
//             label="Help"
//             labelIcon={<DotIcon />}
//             url="help"
//           >
//             <div>
//               <h1>Help Page</h1>
//               <p>This is custom help page</p>
//             </div>
//           </UserButton.UserProfilePage>

//           <UserButton.UserProfileLink
//             label="HomePage"
//             labelIcon={<DotIcon />}
//             url="/HomePage"
//           />
//         </UserButton>
//       </div>
//     </>
//   );
// };

// export default DashBoard;

export default function DashBoard() {
  const { isSignedIn } = useAuth();
  const [sideBar, setSideBar] = useState(true);

  // console.log(isSignedIn);

  return (
    <>
      <div className={`${isSignedIn ? "" : "blur-lg cursor-none"} `}>
        <UpperBoard page={"DashBoard"} />

        <div>
          <div
            className={`border border-gray-200 h-[847px] ${
              sideBar ? "w-[300px] shadow-2xl" : "w-[0px]"
            } absolute`}
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
          {sideBar && (
            <div className="fixed translate-y-[130px] display flex flex-col gap-2">
              <button className="dashboard-section">user</button>
              <button className="dashboard-section">profile</button>
              <button className="dashboard-section">jobs</button>
            </div>
          )}
        </div>
        <div>
          <div>Hii this side i want to set </div>
        </div>
      </div>
    </>
  );
}
