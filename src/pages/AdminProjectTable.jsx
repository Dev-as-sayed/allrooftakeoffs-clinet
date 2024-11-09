import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import AsignUser from "../Components/AsignUser";
import { CiSearch } from "react-icons/ci";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";
import { Button } from "antd";
import { Link } from "react-router-dom";

const AdminProjectTable = () => {
  const [activeButton, setActiveButton] = useState("All Project");
  const [projects, setProjects] = useState([]);
  const [serch, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  // const [debouncedSearch, setDebouncedSearch] = useState(search);
  const axiosSecure = useAxiosSecure();
  const url = "/get-projects";

  console.log(projects);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {}, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [serch]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axiosSecure.get(url, {
          params: { serch },
        });
        setProjects(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [axiosSecure, serch]);

  const handelGetUser = () => {
    axiosSecure
      .get("/get-userData")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosSecure
      .get("/get-userData")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure]);
  return (
    <div className="min-h-screen">
      <div className="w-fit mx-auto gap-2  md:flex lg:w-full md:flex-row lg:flex-row  md:justify-between lg:justify-between my-6">
        <div className="w-fit  mx-auto md:mx-0 lg:mx-0 my-2">
          <div className="relative">
            <CiSearch className="absolute top-[11px] left-2" />
            <input
              type="text"
              name="search"
              className="pl-10 h-9 rounded-md placeholder:text-medium "
              placeholder="Search"
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 lg:gap-6 py-1 px-1 text-medium text-textGray rounded-full bg-white w-fit">
          <button
            className={`px-4 py-1 rounded-full transition-colors duration-300 ${
              activeButton === "All Project"
                ? "bg-secondary text-white"
                : "bg-transparent text-textGray"
            }`}
            onClick={() => setActiveButton("All Project")}
          >
            All Projects
          </button>
          <button
            className={`px-4 py-1 rounded-full transition-colors duration-300 ${
              activeButton === "Last Update"
                ? "bg-secondary text-white"
                : "bg-transparent text-textGray"
            }`}
            onClick={() => setActiveButton("Last Update")}
          >
            New Projects
          </button>
          <button
            className={`px-4 py-1 rounded-full transition-colors duration-300 ${
              activeButton === "Unassigns Projects"
                ? "bg-secondary text-white"
                : "bg-transparent text-textGray"
            }`}
            onClick={() => setActiveButton("Unassigns Projects")}
          >
            Last Updated
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white p-4 rounded-md ">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left h-10 bg-primary-10 text-medium ">
              <td className="pl-2 max-w-52">
                <span className="flex">
                  Project Name <GoChevronDown />
                </span>
              </td>
              <td>Assign With</td>
              <td>Country</td>
              <td>Posting date</td>
              <td>Cost</td>
              <td>Dateline</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {projects.map((data) => (
              <>
                <tr className="border-t-[1px] text-semiBold">
                  <td className="pl-2 py-2 max-w-52">
                    <span className="font-semibold">{data.name}</span>
                    <br />
                    <span>{data.description}</span>
                  </td>
                  <td className="items-center">
                    <div className="flex gap-2">
                      {data.assignedOn ? (
                        <>
                          <img
                            src={data.assignedOn?.image}
                            alt=""
                            className="w-10 rounded-full"
                          />
                          <p className="my-2">{data.assignedOn?.name}</p>
                        </>
                      ) : (
                        <>
                          <div className="h-full">
                            <button onClick={handelGetUser}>
                              {users ? (
                                <AsignUser users={users} projectId={data._id} />
                              ) : (
                                <Button
                                  type="primary"
                                  className="bg-white text-textBlack border-secondary shadow-none "
                                >
                                  Assign user
                                </Button>
                              )}
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td>{data.location}</td>
                  <td>{data.posting_date}</td>
                  <td>${data.total}</td>
                  <td>{data.dateline}</td>
                  <td className=" text-primary items-center ">
                    <div className="flex gap-2">
                      <Button>
                        <Link to={`/project/${data?._id}`}>View</Link>
                      </Button>
                    </div>
                  </td>
                </tr>
              </>
            ))}

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProjectTable;
