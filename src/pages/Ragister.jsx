import { Checkbox, Input } from "antd";
import authImg from "../assets/auth.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Ragister = () => {
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
        <form action="" className="w-full max-w-xs mx-auto">
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-semiBold">Email</label>
            <Input
              name="email"
              placeholder="Enter your email"
              className="w-full"
              variant="filled"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-semiBold">Password</label>
            <Input
              name="password"
              placeholder="Enter your password"
              className="w-full"
              variant="filled"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-semiBold">Address</label>
            <Input
              name="address"
              placeholder="Enter your address"
              className="w-full"
              variant="filled"
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
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Org</label>
              <Input
                name="org"
                placeholder="Enter your Org"
                className="w-full"
                variant="filled"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Password</label>
              <Input
                name="password"
                placeholder="Enter your password"
                className="w-full"
                variant="filled"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-semiBold">Retype Password</label>
              <Input
                name="reTypePassword"
                placeholder="Enter your password"
                className="w-full"
                variant="filled"
              />
            </div>
          </div>
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
