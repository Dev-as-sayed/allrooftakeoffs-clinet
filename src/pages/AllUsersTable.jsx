import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import UsersTabaleDetaile from "../Components/UsersTabaleDetaile";
import { CiSearch } from "react-icons/ci";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 (123) 456-7890",
    projectAssign: 3,
    image: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    address: "456 Elm St, Los Angeles, CA 90001",
    phone: "+1 (213) 987-6543",
    projectAssign: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacBEOxzVt2idhxO0WXyuPKzHanDF8qupFBJSWQAuy0dk324BY92xqKOgh17AdWsx4-tk&usqp=CAU",
  },
  {
    id: 3,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    address: "789 Pine St, Chicago, IL 60601",
    phone: "+1 (312) 555-2468",
    projectAssign: 2,
    image: "https://pics.craiyon.com/2024-06-08/3DqbWy0eQDed7KNPy6eXZQ.webp",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    address: "321 Oak St, Houston, TX 77002",
    phone: "+1 (713) 999-1234",
    projectAssign: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BgjHcHUjk1OijBj0nzw-Gdp4Og6cgk9OtnktYg6EA1gjiqsTRy-ZXpy97LleR4-FpGI&usqp=CAU",
  },
  {
    id: 5,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    address: "654 Maple St, Phoenix, AZ 85001",
    phone: "+1 (602) 888-5678",
    projectAssign: 4,
    image:
      "https://www.shutterstock.com/image-photo/indian-student-profile-picture-260nw-2508708153.jpg",
  },
  {
    id: 6,
    name: "Sophia Miller",
    email: "sophia.miller@example.com",
    address: "876 Birch St, Miami, FL 33101",
    phone: "+1 (305) 777-3456",
    projectAssign: 6,
    image: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
  },
  {
    id: 7,
    name: "David Wilson",
    email: "david.wilson@example.com",
    address: "987 Cedar St, Dallas, TX 75201",
    phone: "+1 (214) 666-4321",
    projectAssign: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacBEOxzVt2idhxO0WXyuPKzHanDF8qupFBJSWQAuy0dk324BY92xqKOgh17AdWsx4-tk&usqp=CAU",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    address: "123 Spruce St, Atlanta, GA 30301",
    phone: "+1 (404) 333-9876",
    projectAssign: 8,
    image: "https://pics.craiyon.com/2024-06-08/3DqbWy0eQDed7KNPy6eXZQ.webp",
  },
  {
    id: 9,
    name: "James Anderson",
    email: "james.anderson@example.com",
    address: "456 Walnut St, Seattle, WA 98101",
    phone: "+1 (206) 222-3456",
    projectAssign: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BgjHcHUjk1OijBj0nzw-Gdp4Og6cgk9OtnktYg6EA1gjiqsTRy-ZXpy97LleR4-FpGI&usqp=CAU",
  },
  {
    id: 10,
    name: "Isabella Thompson",
    email: "isabella.thompson@example.com",
    address: "789 Aspen St, Denver, CO 80201",
    phone: "+1 (303) 555-7890",
    projectAssign: 3,
    image:
      "https://www.shutterstock.com/image-photo/indian-student-profile-picture-260nw-2508708153.jpg",
  },
];

export default function AllUsersTable() {
  const [activeButton, setActiveButton] = useState("All Users");

  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-between my-6">
          <div>
            <div className="relative">
              <CiSearch className="absolute top-[11px] left-2" />
              <input
                type="text"
                className="pl-10 h-9 rounded-md placeholder:text-medium "
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex gap-6 py-1 px-1 text-medium text-textGray rounded-full bg-white w-fit">
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
              {users.map((data) => (
                <>
                  <tr key={data.id} className="border-t-[1px] text-semiBold">
                    <td className=" items-center  justify-start">
                      <div className="flex items-center gap-2 py-2">
                        <figure className="rounded-full w-10">
                          <img
                            className="rounded-full w-full h-full"
                            src={data.image}
                            alt=""
                          />
                        </figure>
                        <span className="font-semibold">{data.name}</span>
                      </div>
                    </td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>${data.email}</td>
                    <td>{data.projectAssign}</td>
                    <td className=" text-primary">
                      <div>
                        <UsersTabaleDetaile data={data} />
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
    </>
  );
}
