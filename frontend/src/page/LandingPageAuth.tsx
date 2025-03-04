import { FC, useState } from "react";
import { UserCreateSchema, userValidateSchema } from "../schema/validator";
import "./../App.css";
import axios, { AxiosError } from "axios";

const SignUpPage: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [validProof, setvalidProof] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [role, setRole] = useState("");

  async function handleClick(): Promise<void> {
    const result = UserCreateSchema.safeParse({
      name: name,
      email: email,
      password: passwd,
      validProof: validProof,
      contactInfo: contactInfo,
      role: role,
    });

    // console.log(result.error?.issues[0].message);  // whole error object is destructured
    if (!result.success) {
      // it throws error but it is captured by the catch block
      alert("Required Fields are necessary");
      throw new Error(
        "Required Fields are necessary\n" +
          result.error?.issues[0].message +
          ". At Section " +
          result.error?.issues[0].path[0]
      );
    }

    try {
      //   console.log(result.data);
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        result.data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      alert(response.data.message);
    } catch (err: AxiosError) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    } finally {
    }
  }

  return (
    <>
      <div className="h-[600px] w-[900px] left-[28%] top-[20%] border-[3px] bg-white display flex justify-center justify-items-center fixed rounded-3xl opacity-85">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-3">
            <input
              placeholder="name"
              type="text"
              value={name}
              onChange={({ target: { value } }) => {
                setName(value);
              }}
              className="button-auth "
            />
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={({ target: { value } }) => {
                setEmail(value);
              }}
              className="button-auth"
            />
            <input
              placeholder="password"
              type="password"
              value={passwd}
              onChange={({ target: { value } }) => {
                setPasswd(value);
              }}
              className="button-auth"
            />
            <input
              placeholder="valid proof"
              type="text"
              value={validProof}
              onChange={({ target: { value } }) => {
                setvalidProof(value);
              }}
              className="button-auth"
            />
            <input
              placeholder="contact info"
              type="text"
              value={contactInfo}
              onChange={({ target: { value } }) => {
                setContactInfo(value);
              }}
              className="button-auth"
            />
            <form className="display flex justify-evenly text-[20px] cursor-pointer select-none">
              <input
                type="radio"
                name="role"
                id="applicant"
                value={"applicant"}
                onChange={({ target: { value } }) => {
                  setRole(value);
                }}
              />
              <label htmlFor="applicant">Applicant</label>
              <input
                type="radio"
                name="role"
                id="hr"
                value={"hr"}
                onChange={({ target: { value } }) => {
                  setRole(value);
                }}
              />
              <label htmlFor="hr">HR</label>
            </form>
          </div>
          <button
            className="shadow-lg w-[100px] rounded-md hover:bg-cyan-100 select-none cursor-pointer text-[20px] p-2"
            onClick={() => {
              handleClick();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

const SignInPage: FC = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  async function handleClick(): Promise<void> {
    const result = userValidateSchema.safeParse({
      email: email,
      password: passwd,
    });

    if (!result.success) {
      alert("Required Fields are necessary");
      throw new Error(
        "Required Fields are necessary\n" +
          result.error?.issues[0].message +
          ". At Section " +
          result.error?.issues[0].path[0]
      );
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/signin",
        result.data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      alert(response.data.message);

      // token is in the response
      localStorage.setItem("auth-token", response.data.token);
    } catch (err: AxiosError) {
      alert(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }

  return (
    <>
      <div className="h-[600px] w-[900px] left-[28%] top-[20%] border-[3px] bg-white flex display justify-center justify-items-center fixed rounded-2xl opacity-85">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-3">
            <input
              type="email"
              className="button-auth"
              placeholder="email"
              value={email}
              onChange={({ target: { value } }) => {
                setEmail(value);
              }}
            />
            <input
              type="password"
              className="button-auth"
              placeholder="password"
              value={passwd}
              onChange={({ target: { value } }) => {
                setPasswd(value);
              }}
            />
          </div>
          <button
            className="shadow-lg w-[100px] rounded-md hover:bg-cyan-100 select-none cursor-pointer text-[20px] p-2"
            onClick={() => {
              handleClick();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export { SignUpPage, SignInPage };
