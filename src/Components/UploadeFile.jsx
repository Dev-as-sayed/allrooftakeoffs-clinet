import { Drawer, message, Upload } from "antd";
import { useState } from "react";
import { FaArrowLeftLong, FaFileArrowUp } from "react-icons/fa6";
import { MdOutlineFileDownload, MdUploadFile } from "react-icons/md";

const UploadeFile = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  /**
   * ===========================
   * UPLOADE FILE RELATED
   * ===========================
   */

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div>
      <button
        className="px-2 py-1 rounded-md border-2 border-primary"
        onClick={showDrawer}
      >
        <span className="flex gap-2">
          <FaFileArrowUp className="mt-1" /> Upload File
        </span>
      </button>
      <Drawer
        title={
          <>
            <div className="flex gap-3">
              <FaArrowLeftLong
                className=" my-auto hover:bottom-2"
                onClick={onClose}
              />
              <p className=""> Back</p>
            </div>
          </>
        }
        width={370}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="min-h-[80vh] flex flex-col justify-between">
          <div className="h-44 bg-blue-50 border-dotted border-blue-600 rounded-md">
            <Dragger {...props} className="bg-secondary">
              <p className="flex justify-center my-2">
                {/* <InboxOutlined /> */}
                <MdUploadFile className="text-2xl text-textGray " />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </div>
          <div>
            <button className="px-2 py-2 rounded-md w-full  bg-primary">
              <span className="flex justify-center gap-2">
                <MdOutlineFileDownload className="mt-1 " /> Uploade
              </span>
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default UploadeFile;