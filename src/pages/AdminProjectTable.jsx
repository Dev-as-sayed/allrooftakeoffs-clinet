import { useState } from "react";
import Details from "./Details";
import { GoChevronDown } from "react-icons/go";
import AsignUser from "../Components/AsignUser";
import { FaFileArrowUp } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const AdminProjectTable = () => {
  const [activeButton, setActiveButton] = useState("All Project");
  const projects = [
    {
      name: "Product A",
      description:
        "High-quality smartphone with a 6.5-inch display and 128GB storage",
      country: "USA",
      posting_date: "2024-09-15",
      cost: 699.99,
      dateline: "2024-09-30",
      summary:
        "This smartphone offers fast performance with the latest processor, high-resolution camera, and long battery life.",
      product_classification: "Electronics",
    },
    {
      name: "Running Shoes",
      description:
        "Lightweight running shoes with breathable mesh and cushioned sole",
      country: "Germany",
      posting_date: "2024-09-10",
      cost: 129.99,
      dateline: "2024-09-20",
      summary:
        "Perfect for long-distance runners, offering comfort and durability for all terrains.",
      product_classification: "Footwear",
      user: {
        id: 6,
        name: "Sophia Miller",
        email: "sophia.miller@example.com",
        address: "876 Birch St, Miami, FL 33101",
        phone: "+1 (305) 777-3456",
        projectAssign: 6,
        image:
          "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      },
    },
    {
      name: "Office Chair",
      description:
        "Ergonomic office chair with adjustable height and lumbar support",
      country: "Canada",
      posting_date: "2024-08-25",
      cost: 199.99,
      dateline: "2024-09-05",
      summary:
        "Designed for long hours of comfort, this chair improves posture and reduces back strain.",
      product_classification: "Furniture",
    },
    {
      name: "Wireless Earbuds",
      description:
        "Noise-cancelling wireless earbuds with up to 24 hours battery life",
      country: "Japan",
      posting_date: "2024-09-12",
      cost: 149.99,
      dateline: "2024-09-25",
      summary:
        "These earbuds offer superior sound quality and noise-cancelling technology, perfect for music lovers.",
      product_classification: "Accessories",
      user: {
        id: 4,
        name: "Emily Davis",
        email: "emily.davis@example.com",
        address: "321 Oak St, Houston, TX 77002",
        phone: "+1 (713) 999-1234",
        projectAssign: 7,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BgjHcHUjk1OijBj0nzw-Gdp4Og6cgk9OtnktYg6EA1gjiqsTRy-ZXpy97LleR4-FpGI&usqp=CAU",
      },
    },
    {
      name: "Product A",
      description:
        "High-quality smartphone with a 6.5-inch display and 128GB storage",
      country: "USA",
      posting_date: "2024-09-15",
      cost: 699.99,
      dateline: "2024-09-30",
      summary:
        "This smartphone offers fast performance with the latest processor, high-resolution camera, and long battery life.",
      product_classification: "Electronics",
      user: {
        id: 3,
        name: "Robert Brown",
        email: "robert.brown@example.com",
        address: "789 Pine St, Chicago, IL 60601",
        phone: "+1 (312) 555-2468",
        projectAssign: 2,
        image:
          "https://pics.craiyon.com/2024-06-08/3DqbWy0eQDed7KNPy6eXZQ.webp",
      },
    },
    {
      name: "Running Shoes",
      description:
        "Lightweight running shoes with breathable mesh and cushioned sole",
      country: "Germany",
      posting_date: "2024-09-10",
      cost: 129.99,
      dateline: "2024-09-20",
      summary:
        "Perfect for long-distance runners, offering comfort and durability for all terrains.",
      product_classification: "Footwear",
      user: {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        address: "456 Elm St, Los Angeles, CA 90001",
        phone: "+1 (213) 987-6543",
        projectAssign: 5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacBEOxzVt2idhxO0WXyuPKzHanDF8qupFBJSWQAuy0dk324BY92xqKOgh17AdWsx4-tk&usqp=CAU",
      },
    },
    {
      name: "Office Chair",
      description:
        "Ergonomic office chair with adjustable height and lumbar support",
      country: "Canada",
      posting_date: "2024-08-25",
      cost: 199.99,
      dateline: "2024-09-05",
      summary:
        "Designed for long hours of comfort, this chair improves posture and reduces back strain.",
      product_classification: "Furniture",
      user: {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St, New York, NY 10001",
        phone: "+1 (123) 456-7890",
        projectAssign: 3,
        image:
          "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      },
    },
    {
      name: "Wireless Earbuds",
      description:
        "Noise-cancelling wireless earbuds with up to 24 hours battery life",
      country: "Japan",
      posting_date: "2024-09-12",
      cost: 149.99,
      dateline: "2024-09-25",
      summary:
        "These earbuds offer superior sound quality and noise-cancelling technology, perfect for music lovers.",
      product_classification: "Accessories",
      user: {
        id: 10,
        name: "Isabella Thompson",
        email: "isabella.thompson@example.com",
        address: "789 Aspen St, Denver, CO 80201",
        phone: "+1 (303) 555-7890",
        projectAssign: 3,
        image:
          "https://www.shutterstock.com/image-photo/indian-student-profile-picture-260nw-2508708153.jpg",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="w-fit mx-auto gap-2  md:flex lg:w-full md:flex-row lg:flex-row  md:justify-between lg:justify-between my-6">
        <div className="w-fit  mx-auto md:mx-0 lg:mx-0 my-2">
          <div className="relative">
            <CiSearch className="absolute top-[11px] left-2" />
            <input
              type="text"
              className="pl-10 h-9 rounded-md placeholder:text-medium "
              placeholder="Search"
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
                      {data.user ? (
                        <>
                          <img
                            src={data.user?.image}
                            alt=""
                            className="w-10 rounded-full"
                          />
                          <p className="my-2">{data.user?.name}</p>
                        </>
                      ) : (
                        <>
                          <div className="h-full">
                            <AsignUser />
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td>{data.country}</td>
                  <td>{data.posting_date}</td>
                  <td>${data.cost}</td>
                  <td>{data.dateline}</td>
                  <td className=" text-primary items-center ">
                    <div className="flex gap-2">
                      <Details type={"uploadProject"} data={data}>
                        View
                      </Details>
                      <button className="px-2 py-1 rounded-md border-2 border-primary">
                        <span className="flex gap-2">
                          <FaFileArrowUp className="mt-1" /> Upload File
                        </span>
                      </button>
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
