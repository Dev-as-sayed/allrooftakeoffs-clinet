import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

const AsignsdProjects = () => {
  const [userProjects, setUserProjects] = useState([]);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const url = `/get-projects/${id}`;

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        console.log(res.data);
        setUserProjects(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, url]);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {userProjects.length === 0 ? (
        <p className="text-gray-500 text-xl font-semibold">
          No projects assigned yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {userProjects.map((project) => (
            <div
              key={project._id.$oid}
              className="flex-1 min-w-[300px] border p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <Link to={`/project/${project?._id}`}>View</Link>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AsignsdProjects;
