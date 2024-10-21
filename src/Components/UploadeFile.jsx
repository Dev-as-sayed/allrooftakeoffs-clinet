import { Drawer, message, Upload } from "antd";
import { useState } from "react";
import { FaArrowLeftLong, FaFileArrowUp } from "react-icons/fa6";
import { MdOutlineFileDownload, MdUploadFile } from "react-icons/md";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

const UploadeFile = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null); // Single file state
  const axoisSecure = useAxiosSecure();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleFileChange = (file) => {
    setFile(file); // Directly store the file
    console.log("Selected file:", file); // Log the selected file
  };

  // Handle file upload to server
  const handleUploadFile = async () => {
    if (!file) {
      message.error("No file selected for upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the file to FormData
    formData.append("fileName", file.name); // Add any additional info if needed

    try {
      // Send the POST request to the server
      const response = await axoisSecure.patch(`/upload-file/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set correct headers for file upload
        },
      });

      if (response.status === 200) {
        message.success("File uploaded and link saved successfully.");
        console.log("Server response:", response.data);
        setOpen(false); // Close the drawer upon successful upload
      } else {
        message.error("Failed to upload the file.");
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
      message.error("Error occurred during the upload.");
    }
  };

  const { Dragger } = Upload;
  const uploadProps = {
    name: "file",
    multiple: false, // Single file
    beforeUpload: (file) => {
      console.log(file);

      handleFileChange(file); // Directly store the file
      return false; // Prevent auto upload
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
                className="my-auto hover:bottom-2"
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
            <Dragger {...uploadProps} className="bg-secondary">
              <p className="flex justify-center my-2">
                <MdUploadFile className="text-2xl text-textGray" />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </div>
          <div>
            <button
              className="px-2 py-2 rounded-md w-full bg-primary"
              onClick={handleUploadFile}
            >
              <span className="flex justify-center gap-2">
                <MdOutlineFileDownload className="mt-1" /> Upload
              </span>
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default UploadeFile;
