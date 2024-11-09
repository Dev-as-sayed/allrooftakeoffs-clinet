import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";
import FileUpload from "../Components/FileUpload";
import { AuthContext } from "../auth/AuthProvider";

const ProjectsView = () => {
  const [project, setProjet] = useState({});

  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === "Admin";
  const { id } = useParams();

  const axiouSecure = useAxiosSecure();
  const url = `/get-project/${id}`;
  useEffect(() => {
    axiouSecure
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProjet(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiouSecure, url]);

  // Function to download all files
  const handleDownloadAll = () => {
    project?.files?.forEach((file) => {
      if (file?.downloadableLink) {
        const link = document.createElement("a");
        link.href = file.downloadableLink;
        link.download = file.fileName || "downloaded-file";
        link.click();
      }
    });
  };
  return (
    <div className="min-h-screen pb-4">
      <div>
        <p className="flex gap-3 my-3 ">
          <Link to="/projects">
            <FaArrowLeftLong className="text-2xl text-textGray" />{" "}
          </Link>
          Project View
        </p>
      </div>
      <div className="">
        {/* 1st row  */}
        <div className="w-full p-4 bg-white rounded-lg">
          <h2 className="text-xl font-medium">{project?.name}</h2>
          <p className="my-1">Project name</p>
        </div>
        {/* 2nd row  */}
        <div className="flex flex-wrap my-6 gap-4">
          <div className="flex-1 min-w-[250px] bg-white p-4 rounded-lg">
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Location
            </p>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              {project?.location}
            </h3>
          </div>

          <div className="flex-1 min-w-[250px] bg-white p-4 rounded-lg">
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Deadline Date
            </p>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              {project?.dateline}
            </h3>
          </div>

          <div className="flex-1 min-w-[250px] bg-white p-4 rounded-lg">
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              My Details
            </p>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              {project?.onarDetail?.userName}
            </h3>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              {project?.onarDetail?.userEmail}
            </h3>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              {project?.onarDetail?.userPhone}
            </h3>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              {project?.onarDetail?.userAddress}
            </h3>
          </div>
        </div>
        {/* 3rd row  */}
        <div className="flex flex-col h-fit gap-y-4 gap-x-4 md:flex-row">
          <div className="flex-1 bg-white p-4 rounded-md">
            {isAdmin ? (
              <FileUpload projectId={id} />
            ) : (
              <>
                <div className="flex justify-between mb-4">
                  <p className="text-textGray">File and attachment</p>
                  <Button
                    className="bg-transparent border-primary text-primary"
                    onClick={handleDownloadAll}
                  >
                    Download all
                  </Button>
                </div>
                {project?.files?.map((file, index) => (
                  <div key={index} className="flex h-fit justify-between pb-1 ">
                    <p className="text-textGray my-auto">
                      {file?.fileName ? <>{file.fileName}</> : "attached fiel"}
                    </p>
                    <Button className="bg-transparent border-primary text-primary">
                      <a
                        href={`${file?.downloadableLink}`}
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </Button>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="flex-1 space-y-4">
            <div className="bg-white p-4 rounded-md">
              <h4>Job detail</h4>
              <p>{project?.description}</p>
            </div>
            <div className="text-textGray bg-white p-4 rounded-md">
              <h3 className="my-2">Builder Details</h3>
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>{project?.subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>GST</p>
                <p>{project?.gst}</p>
              </div>
              <div className="h-[2px] bg-black"></div>
              <div className="flex justify-between text-textBlack font-semibold">
                <h2>Total</h2>
                <p>{project?.subTotal + project?.gst}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <FileUpload projectId={id} /> */}
      </div>
    </div>
  );
};

export default ProjectsView;
