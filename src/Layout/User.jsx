import NavBar from "../shared/NavBar";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="bg-stoke">
      <div className="border-b-[1px] border-textGray border-opacity-50 px-24">
        <NavBar />
      </div>
      <div className="px-24">
        <Outlet />
      </div>
    </div>
  );
};

export default User;
