import { CiBellOn } from "react-icons/ci";
import logo from "../assets/logo.png";
import profileImg from "../assets/profile.png";
import detialIcon from "../assets/detailIcon.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between py-2 sticky ">
      <div className="">
        <img src={logo} alt="" />
        <p className="py-0 w-fit text-medium">ALL ROOF TAKE-OFFS</p>
      </div>
      <div className="flex gap-3 h-fit">
        <button>
          <CiBellOn className="w-10 h-10 p-2 border-2 rounded-full" />
        </button>
        <img src={profileImg} className=" w-11 h-11" alt="" />
        <div className="">
          <h3 className="">A M Sayed</h3>
          <p className="text-textGray">Web developer</p>
        </div>
        <img src={detialIcon} alt="" className="h-full my-auto " />
      </div>
    </nav>
  );
};

export default NavBar;
