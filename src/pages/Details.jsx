import { useState } from "react";
import { Button, Drawer } from "antd";
const Details = () => {
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
        View
      </Button>
      <Drawer
        title="Multi-level drawer"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      ></Drawer>
    </>
  );
};
export default Details;
