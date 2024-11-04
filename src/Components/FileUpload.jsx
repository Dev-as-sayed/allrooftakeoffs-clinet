import { useState } from "react";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";
import Dragger from "antd/es/upload/Dragger";
import { Button, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const FileUpload = ({ projectId }) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const axiosSecure = useAxiosSecure(); // Custom Axios hook for secure requests
  const url = `/upload-file/${projectId}`; // API endpoint

  console.log(file);

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file); // `file` is the file you want to upload

    try {
      const response = await axiosSecure.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <Dragger
        name="file"
        multiple={false}
        beforeUpload={(file) => {
          setFile(file);
          message.success(`${file.name} file selected.`);
          return false; // Prevents automatic upload
        }}
        onRemove={() => setFile(null)} // Optional: clear file on remove
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      <Button
        onClick={handleUpload}
        disabled={!file}
        className="mt-4 bg-secondary text-white w-full"
      >
        Upload
      </Button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;
