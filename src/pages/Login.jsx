import { Input } from "antd";
import authImg from "../assets/auth.png";
import logo from "../assets/logo.png";

const Login = () => {
  const handelLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
  };
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      {/* Left side: Image */}
      <div className=" flex items-center justify-center">
        <img src={authImg} className="h-auto object-cover" alt="Auth image" />
      </div>

      {/* Right side: Form and logo */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xs mx-auto">
          <img src={logo} className="w-32 " alt="Logo" />
          <p className=" py-2 text-medium">ALL ROOF TAKE-OFFS</p>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
