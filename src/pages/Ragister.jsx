import { Checkbox, Input } from "antd";
import authImg from "../assets/auth.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/AxiosPublic/useAxiosPublic";
import { useState } from "react";

const Ragister = () => {
  const [passErr, setPassErr] = useState("");
  const [resError, setResError] = useState({});
  const axiosPublic = useAxiosPublic();
  const url = "/register";

  const handelRagister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const org = form.org.value;
    const password = form.password.value;
    const reTypePassword = form.reTypePassword.value;

    console.log({ name, email, address, phone, org, password, reTypePassword });

    const userData = {
      name,
      email,
      address,
      phone,
      org,
      password,
      reTypePassword,
    };

    if (password !== reTypePassword) {
      setPassErr("re-type corract password");
      return;
    }
    axiosPublic
      .post(url, userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === false) {
          setResError(res.data);
          return;
        }
        form.reset();
        alert("Ragister successfull, Login pleace");
      })
      .catch((err) => {
        console.log(err);
        setResError(err);
        alert(err.message);
      });
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="h-fit flex flex-col-reverse md:flex-row ">
      {/* Left side: Image */}
      <div className=" flex items-center justify-center">
        <img src={authImg} className=" h-full " alt="Auth image" />
      </div>
      {/* Right side: Form and logo */}

      {/* Right side: Form and logo */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xs mx-auto">
          <img src={logo} className="w-32 " alt="Logo" />
          <div className="my-3 ">
            <h2 className="text-smallBold text-textBlack">
              Create an account!
            </h2>
            <p className="text-textGray text-semiBold">
              Enter your details to create account.
            </p>
          </div>
        </div>

        {/* Login form */}
        <form
          action=""
          className="w-full max-w-xs mx-auto"
          onSubmit={handelRagister}
        >
          {resError && alert(resError.message)}
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-semiBold">Name</label>
            <Input
              name="name"
              required
              placeholder="Enter your name"
              className="w-full"
              variant="filled"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-semiBold">Email</label>
            <Input
              name="email"
              placeholder="Enter your Email"
              className="w-full"
              variant="filled"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-semiBold">Address</label>
            <Input
              name="address"
              placeholder="Enter your address"
              className="w-full"
              variant="filled"
              required
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Phone</label>
              <Input
                name="phone"
                placeholder="Type here"
                className="w-full"
                variant="filled"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Org</label>
              <Input
                name="org"
                placeholder="Enter your Org"
                className="w-full"
                variant="filled"
                required
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Password</label>
              <Input.Password
                name="password"
                placeholder="Enter your password"
                className="w-full"
                variant="filled"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Retype Password</label>
              <Input.Password
                name="reTypePassword"
                placeholder="Enter your password"
                className="w-full"
                variant="filled"
                required
                onChange={() => setPassErr("")}
              />
            </div>
          </div>
          {passErr && <p className="text-red-500">{passErr}</p>}
          <div>
            <Checkbox onChange={onChange}>
              By clicking create account button you will be agree with our{" "}
              <span className="text-semiBold">
                <a href="#">Terms and Conditions</a>
              </span>{" "}
              and{" "}
              <span className="text-semiBold">
                <a href="#">Privacy Policy</a>
              </span>
              .
            </Checkbox>
          </div>
          <button className="w-full bg-primary text-white font-semibold py-2 rounded-md">
            Create account
          </button>
        </form>
        <p className="text-blue-400 underline mt-4">
          <Link to="/login">Login now</Link>
        </p>
      </div>
    </div>
  );
};

export default Ragister;
