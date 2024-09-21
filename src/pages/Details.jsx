import { useState } from "react";
import { Button, Drawer, Space } from "antd";
const Details = ({ data }) => {
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
        View
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
        <h1>hlw world</h1>
      </Drawer>
    </>
  );
};
export default Details;
