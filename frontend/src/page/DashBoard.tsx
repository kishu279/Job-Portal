import { UserButton } from "@clerk/clerk-react";

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

const DashBoard = () => {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <UserButton>
          <UserButton.MenuItems>
            {/* <UserButton.Action label="manageAccount" /> */}
            <UserButton.Action
              label="Open Chat"
              labelIcon={<DotIcon />}
              onClick={() => {
                alert("init chat");
              }}
            />
            <UserButton.Link
              label="Create Orgainization"
              labelIcon={<DotIcon />}
              href="/create-orgainization"
            />
          </UserButton.MenuItems>

          <UserButton.UserProfilePage
            label="Help"
            labelIcon={<DotIcon />}
            url="help"
          >
            <div>
              <h1>Help Page</h1>
              <p>This is custom help page</p>
            </div>
          </UserButton.UserProfilePage>
        </UserButton>
      </div>
    </>
  );
};

export default DashBoard;
