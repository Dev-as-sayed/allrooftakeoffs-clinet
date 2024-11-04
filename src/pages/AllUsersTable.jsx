import { GoChevronDown } from "react-icons/go";
import { useEffect, useState } from "react";
import UsersTabaleDetaile from "../Components/UsersTabaleDetaile";
import { CiSearch } from "react-icons/ci";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

export default function AllUsersTable() {
  const [activeButton, setActiveButton] = useState("All Users");
  const [serch, setSearch] = useState("");

  const [users, setUsers] = useState([]);
  console.log(users);

  const axoisSecure = useAxiosSecure();
  const url = "/get-users";

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(serch);

  useEffect(() => {
    const handler = setTimeout(() => {}, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [serch]);

  useEffect(() => {
    axoisSecure
      .get(url, { params: { serch } })
      .then((res) => {
        console.log(res?.data?.data);
        setUsers(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axoisSecure, serch]);
  return (
    <>
      <div className="min-h-screen">
        <div className="w-fit mx-auto gap-2  md:flex lg:w-full md:flex-row lg:flex-row  md:justify-between lg:justify-between my-6">
          <div className="w-fit  mx-auto md:mx-0 lg:mx-0 my-2">
            <div className="relative">
              <CiSearch className="absolute top-[11px] left-2" />
              <input
                type="text"
                className="pl-10 h-9 rounded-md placeholder:text-medium "
                placeholder="Search"
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 lg:gap-6 py-1 px-1 text-medium text-textGray rounded-full bg-white w-fit">
            <button
              className={`px-4 py-1 rounded-full transition-colors duration-300 ${
                activeButton === "All Users"
                  ? "bg-secondary text-white"
                  : "bg-transparent text-textGray"
              }`}
              onClick={() => setActiveButton("All Users")}
            >
              All Users
            </button>
            <button
              className={`px-4 py-1 rounded-full transition-colors duration-300 ${
                activeButton === "Last Update"
                  ? "bg-secondary text-white"
                  : "bg-transparent text-textGray"
              }`}
              onClick={() => setActiveButton("Last Update")}
            >
              New User
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
                <td className="pl-2">
                  <span className="flex items-center gap-2 text-sm">
                    Client Name <GoChevronDown />
                  </span>
                </td>
                <td>
                  <span className="flex items-center gap-2 text-sm">
                    Address <GoChevronDown />
                  </span>
                </td>
                <td>
                  <span className="flex items-center gap-2 text-sm">
                    Phone <GoChevronDown />
                  </span>
                </td>
                <td>
                  <span className="flex items-center gap-2 text-sm">
                    Email <GoChevronDown />
                  </span>
                </td>
                <td>
                  <span className="flex items-center gap-2 text-sm">
                    Project Assign <GoChevronDown />
                  </span>
                </td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users?.map((data) => (
                <>
                  <tr key={data.id} className="border-t-[1px] text-semiBold">
                    <td className=" items-center  justify-start">
                      <div className="flex items-center gap-2 py-2">
                        <figure className="rounded-full w-10">
                          {data.image ? (
                            <img
                              className="rounded-full w-full h-full"
                              src={data.image}
                              alt=""
                            />
                          ) : (
                            <div className="rounded-full w-full  h-10 flex justify-center align-middle bg-bgGray">
                              <h1 className="h-fit my-auto text-xl text-textBlack font-serif font-medium">
                                {data.name.slice(0, 2)}
                              </h1>
                            </div>
                          )}
                          {/* <img
                            className="rounded-full w-full h-full"
                            src={data.image}
                            alt=""
                          /> */}
                        </figure>
                        <span className="font-semibold">{data.name}</span>
                      </div>
                    </td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>${data.email}</td>
                    <td>{data.projectAssign}</td>
                    <td className=" text-primary">
                      <div className="">
                        <UsersTabaleDetaile id={data._id} />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
