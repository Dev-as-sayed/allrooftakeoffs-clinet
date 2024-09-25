import { useState } from "react";
import AllProjectsTable from "../Components/AllProjectsTable/AllProjectsTable";
import AllUsersTable from "../Components/AllUsersTable/AllUsersTable";

const UserTable = () => {
  const [activeButton, setActiveButton] = useState("All Project");
  

  return (
    <div className="min-h-screen">
      <div className="flex justify-between my-6">
        <input
          type="text"
          className="px-6 h-9 rounded-md placeholder:text-medium "
          placeholder="Search"
        />
        <div className="flex gap-6 py-1 px-1 text-medium text-textGray rounded-full bg-white w-fit ">
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
              activeButton === "All Project"
                ? "bg-secondary text-white"
                : "bg-transparent text-textGray"
            }`}
            onClick={() => setActiveButton("All Project")}
          >
            All Project
          </button>
          <button
            className={`px-4 py-1 rounded-full transition-colors duration-300 ${
              activeButton === "Last Update"
                ? "bg-secondary text-white"
                : "bg-transparent text-textGray"
            }`}
            onClick={() => setActiveButton("Last Update")}
          >
            Last Update
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white p-4 rounded-md ">
        <table className="w-full min-w-[600px]">
          {
            activeButton === "All Users" &&
            <AllUsersTable/>
          }
          {
            activeButton === "All Project" &&
            <AllProjectsTable/>
          }
        </table>
      </div>
    </div>
  );
};

export default UserTable;
