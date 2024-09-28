import { CiBellOn } from "react-icons/ci";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import UploadeProjects from "../Components/UploadeProjects";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileDroyer from "../Components/ProfileDroyer";
import { IoIosMenu } from "react-icons/io";

import { Button, Drawer, Radio, Space } from "antd";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("users");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  const isAdmin = true;
  return (
    <div>
      {/* Learge and medualm device */}
      <nav className=" hidden md:flex lg:flex justify-between py-2  ">
        <div className="">
          <img src={logo} alt="" className="w-36" />
        </div>
        {isAdmin && (
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
        )}
        <div className="flex gap-3 h-fit items-center">
          {isAdmin && (
            // <Button className="text-white bg-primary my-auto">
            //   Upload Project
            // </Button>
            <div>
              <UploadeProjects />
            </div>
          )}
          <button>
            <CiBellOn className="w-10 h-10 p-2 border-2 border-gray-400 rounded-full" />
          </button>
          <ProfileDroyer />
          {/* <img src={profileImg} className=" w-11 h-11" alt="" /> */}
          <div className="">
            <h3 className="">A M Sayed</h3>
            <p className="text-textGray">Web developer</p>
          </div>
          <BsThreeDotsVertical />
        </div>
      </nav>
      {/* Learge and medualm device */}
      <nav className="flex justify-between items-center p-2 md:hidden lg:hidden">
        {isAdmin && (
          <div>
            <IoIosMenu onClick={showDrawer} className="text-2xl" />
            <Drawer
              title="Close"
              placement={placement}
              width={300}
              onClose={onClose}
              open={open}
              className=""
            >
              <div
                className="h-fit text-center  gap-6  text-textGray"
                onClick={showDrawer}
              >
                <ul className=" text-semiBold">
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
                  <li className="my-5">
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
                <button onClick={showDrawer}>
                  <UploadeProjects />
                </button>
              </div>
            </Drawer>
          </div>
        )}
        <div className="">
          <img src={logo} alt="" className="w-32" />
        </div>
        <div className="flex gap-3 h-fit items-center">
          <button>
            <CiBellOn className="w-10 h-10 p-2 border-2 border-gray-400 rounded-full" />
          </button>
          <ProfileDroyer />
          <BsThreeDotsVertical />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
