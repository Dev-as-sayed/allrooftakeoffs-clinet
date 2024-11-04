import { Button, Checkbox, Modal } from "antd";
import React from "react";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

const AssignUser = ({ users = [], projectId }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [selectedUser, setSelectedUser] = React.useState(null); // Track a single selected user

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  const handleCheckboxChange = (user) => {
    setSelectedUser(user); // Always set the current user as selected
  };
  console.log(selectedUser);

  const axiosSecure = useAxiosSecure();
  const url = `/asignUser/${projectId}`;
  const handelAsignUser = () => {
    axiosSecure
      .patch(url, selectedUser)
      .then((res) => {
        if (res.data.success) {
          showLoading;
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button
        type="primary"
        className="bg-white text-textBlack border-secondary shadow-none "
        onClick={showLoading}
      >
        Assign user
      </Button>
      <Modal
        footer={
          <Button
            type="primary"
            className="w-full"
            onClick={() => {
              if (showLoading) handelAsignUser();
            }}
          >
            Confirm
          </Button>
        }
        open={open}
        onCancel={() => setOpen(false)}
        width={300}
      >
        {users.map((user) => (
          <div
            key={user?.id}
            className="flex gap-2 my-3 justify-start items-center"
          >
            <Checkbox
              // checked={selectedUser?.id === user.id}
              onChange={() => handleCheckboxChange(user)}
            />
            {user.image ? (
              <div className="rounded-full w-10 h-10 flex justify-center align-middle bg-bgGray">
                <h1 className="h-fit my-auto text-xl text-textBlack font-serif font-medium">
                  {user.name.slice(0, 2)}
                </h1>
              </div>
            ) : (
              <img src={user.image} className="w-10 rounded-full" alt="" />
            )}
            <p className="text-lg">{user.name}</p>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default AssignUser;
