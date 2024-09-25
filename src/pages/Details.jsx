import { useState } from "react";
import DrawerProjects from "../Components/DrawerDetails/DrawerProjects";

import { Button, Drawer, Space } from "antd";
import DrawerUploadProject from "../Components/DrawerDetails/DrawerUploadProject";
const Details = ({ data, children, type }) => {
  console.log(data);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        className="text-primary bg-white border-stoke hover:text-white hover:bg-primary"
        onClick={showDrawer}
      >
        {children}
      </Button>
      <Drawer
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
        title="Multi-level drawer"
        width={370}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {type === "projects" && <DrawerProjects />}
        {type === "uploadProject" && <DrawerUploadProject />}
      </Drawer>
    </>
  );
};
export default Details;
