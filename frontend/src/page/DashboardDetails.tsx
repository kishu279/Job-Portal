import { useReverification, useUser } from "@clerk/clerk-react";
import { ChangeEvent, FC, useEffect, useState } from "react";
import "./../App.css";
import { UserCreateSchema, userValidateSchema } from "../schema/validator";
import { ZodError } from "zod";
import axios, { Axios, AxiosError } from "axios";

enum roles {
  "HR",
  "applicant",
}

async function myFetcher(obj: any) {
  const response = await axios.post("http://localhost:3000/user/signup", obj, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export const DashboardUserDetails: FC = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  const [contactInfo, setContactInfo] = useState<string>("");
  const [validProof, setValidProof] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [reverification] = useReverification(myFetcher, {
    // throwOnCancel: true,
  });

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // console.log(user);
      setValidProof(user?.unsafeMetadata.validProof);
      setContactInfo(user?.unsafeMetadata.contactInfo);
      // setRole(user?.unsafeMetadata.role);
    } else {
      throw new Error("Sign In Again");
    }
  }, [isLoaded, isSignedIn]);

  async function handleSubmit() {
    setLoading(true);
    try {
      // validate details
      const parsedUserData = UserCreateSchema.parse({
        name: user?.username,
        email: user?.primaryEmailAddress?.emailAddress,
        isValidated: user?.passwordEnabled, // checks that password is enabled or not
        validProof: validProof,
        contactInfo: contactInfo,
        role: role,
      });

      // console.log(parsedUserData);

      // Authenticate user
      // ...

      user?.update({
        unsafeMetadata: {
          validProof: validProof,
          contactInfo: contactInfo,
          role: role,
        },
      });

      const response = await reverification(parsedUserData);

      console.log(response);
    } catch (err) {
      if (err instanceof ZodError) {
        // throws an error
        console.log(err);
      } else if (err instanceof AxiosError) {
        // throws an error
        console.log(err);
      } else {
        throw new Error(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="font-bold">User Details</div>
      <hr className="text-gray-200 mt-4" />
      <div>
        <div className="mt-4 dashboard-allElements">
          <label htmlFor="setContact" className="">
            Contact Info
          </label>
          <input
            id="set"
            type="text"
            placeholder="set contact info"
            value={contactInfo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setContactInfo(e.target.value);
            }}
            className="border rounded-[4px] ml-32 p-1 pl-2 outline-0"
          />
        </div>
        <hr className="text-gray-200 mt-4 " />

        <div className="mt-4 dashboard-allElements">
          <label htmlFor="setValid">Valid Proof</label>
          <input
            type="text"
            value={validProof}
            placeholder="set valid proof"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValidProof(e.target.value);
            }}
            className=" border rounded-[4px] ml-34 p-1 pl-2 outline-0"
          />
        </div>

        <hr className="text-gray-200 mt-4 " />

        <div className="mt-4 flex display place-items-center gap-14 ">
          <div className="dashboard-allElements">
            <p>Roles</p>
          </div>
          <div className="ml-30 display flex gap-2">
            <label htmlFor="Hr">Hr</label>
            <input
              id="Hr"
              type="radio"
              value={roles[0]}
              onChange={() => {
                setRole(roles[0]);
              }}
              name="Roles"
            ></input>
          </div>
          <div className="display flex gap-2">
            <label htmlFor="Applicant">Applicant</label>
            <input
              id="Applicant"
              type="radio"
              value={roles[1]}
              onChange={() => {
                setRole(roles[1]);
              }}
              name="Roles"
            />
          </div>
        </div>
      </div>

      <hr className="text-gray-200 mt-4 " />

      <div>
        <button
          className="ml-[500px] mt-[350px] border p-2 w-[60px] rounded-2xl hover:bg-gray-200"
          onClick={() => {
            // send request to backend
            handleSubmit();
          }}
        >
          save
        </button>
        {/* {user?.primaryEmailAddress?.emailAddress}
        {user?.username}
        {user?.firstName} */}
      </div>
      {loading}
    </>
  );
};
