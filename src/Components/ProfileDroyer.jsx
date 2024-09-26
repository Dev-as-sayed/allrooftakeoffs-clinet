import { Button, Drawer, Space } from "antd";
import { useContext, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProfileDroyer = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const handelLogOut = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div onClick={showDrawer} className="">
        <img src={user.image} className=" w-11 h-11 rounded-full" alt="" />
      </div>
      <Drawer
        extra={<Space></Space>}
        title={
          <>
            <div className="flex justify-between">
              <div className="flex gap-3 h-fit">
                <FaArrowLeftLong
                  className=" my-auto hover:bottom-2"
                  onClick={onClose}
                />
                <p className=""> Back</p>
              </div>
              <div>
                <Button
                  className="bg-red-500 text-white"
                  onClick={handelLogOut}
                >
                  Logout
                </Button>
              </div>
            </div>
          </>
        }
        width={370}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="text-center">
          <img src={user?.image} className="w-44 rounded-full mx-auto" alt="" />
          <h1 className="text-textBlack text-xl font-serif my-3">
            {user?.name}
          </h1>
          <p>{user?.email}</p>
          <p>{user?.address}</p>
          <p>{user?.phone}</p>
        </div>
      </Drawer>
    </>
  );
};

export default ProfileDroyer;
