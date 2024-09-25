import { CiBellOn } from "react-icons/ci";
import logo from "../assets/logo.png";
import profileImg from "../assets/profile.png";
import detialIcon from "../assets/detailIcon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("users");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const isAdmin = true;
  return (
    <nav className="flex justify-between py-2 sticky ">
      <div className="">
        <img src={logo} alt="" />
        <p className="py-0 w-fit text-medium">ALL ROOF TAKE-OFFS</p>
      </div>
      {isAdmin ? (
        <div className="h-fit flex my-auto text-textGray">
          <ul className="flex gap-4 text-semiBold">
            <li>
              <Link
                to="/users"
                className={`${
                  activeLink === "users"
                    ? "underline font-bold text-textBlack"
                    : ""
                }`}
                onClick={() => handleLinkClick("users")}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  activeLink === "projects"
                    ? "underline font-bold text-textBlack"
                    : ""
                }`}
                onClick={() => handleLinkClick("projects")}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
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
