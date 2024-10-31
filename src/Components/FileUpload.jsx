// import { useState } from "react";
// import axios from "axios";
// import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

// const FileUpload = ({ projectId }) => {
//   const [file, setFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const axiouSecure = useAxiosSecure(); // Custom Axios hook for secure requests
//   const url = `/upload-file/${projectId}`; // API endpoint

//   // Handle file selection
//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   console.log(file);

//   const handleUpload = async () => {
//     console.log("hit the button");

//     if (!file) {
//       setUploadStatus("No file selected.");
//       return;
//     }

//     // Create a FormData object to send the file
//     const formData = new FormData();
//     formData.append("file", file); // 'file' should match the name used in your multer setup

//     try {
//       const res = await axiouSecure.patch(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Required for file uploads
//         },
//       });
//       console.log(res.data);
//       setUploadStatus("File uploaded successfully.");
//     } catch (err) {
//       console.error(err);
//       setUploadStatus("Failed to upload file.");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadStatus && <p>{uploadStatus}</p>}
//     </div>
//   );
// };

// export default FileUpload;

import { useState } from "react";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

const FileUpload = ({ projectId }) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const axiouSecure = useAxiosSecure(); // Custom Axios hook for secure requests
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
      const response = await axiouSecure.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  //   const handleUpload = async () => {
  //     if (!file) {
  //       setUploadStatus("No file selected.");
  //       return;
  //     }

  //     // Create a FormData object to send the file
  //     const formData = new FormData();
  //     formData.append("file", file); // 'file' should match the name used in your multer setup

  //     try {
  //       // Send a POST request to the server
  //       const res = await axiouSecure.post(url, formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data", // Required for file uploads
  //         },
  //       });
  //       console.log(res.data);
  //       setUploadStatus(
  //         "File uploaded successfully. File ID: " + res.data.fileId
  //       );
  //     } catch (err) {
  //       console.error(err);
  //       setUploadStatus("Failed to upload file.");
  //     }
  //   };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;
