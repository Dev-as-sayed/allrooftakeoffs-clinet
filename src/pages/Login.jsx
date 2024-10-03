import { Input } from "antd";
import authImg from "../assets/auth.png";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
    login({ email, password });
    navigate("/");
  };
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row">
      {/* Left side: Image */}
      <div className=" md:w-1/2 lg:w-1/2">
        <img src={authImg} className="h-screen w-full" alt="Auth image" />
      </div>

      {/* Right side: Form and logo */}
      <div className="py-4 flex flex-col justify-center mx-auto">
        <div className="w-full ">
          <img src={logo} className="w-32 " alt="Logo" />
          <div className="my-4 ">
            <h2 className="text-smallBold text-textBlack">Welcome Back!</h2>
            <p className="text-textGray text-semiBold">
              Enter your email and password to login.
            </p>
          </div>
        </div>

        {/* Login form */}
        <form
          action=""
          onSubmit={handelLogin}
          className="w-full max-w-xs mx-auto"
        >
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
          <button className="w-full bg-primary text-white font-semibold py-2 rounded-md">
            Login
          </button>
          <p className="text-blue-400 underline text-center m-4">
            <Link to="/ragister">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
