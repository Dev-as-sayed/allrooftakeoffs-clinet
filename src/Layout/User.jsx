import NavBar from "../shared/NavBar";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="bg-stoke px-24">
      <div className="">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default User;
