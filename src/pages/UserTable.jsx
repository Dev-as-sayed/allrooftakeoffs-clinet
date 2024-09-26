import { useState } from "react";
import Details from "./Details";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const UserTable = () => {
  const [activeButton, setActiveButton] = useState("All Project");
  const tData = [
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
    },
  ];

  return (
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
        <div className="flex gap-6 py-1 px-1 text-medium text-textGray rounded-full bg-white w-fit ">
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
          <thead>
            <tr className="text-left h-10 bg-primary-10 text-medium ">
              <td className="pl-2">
                <span className="flex">
                  Project Name <GoChevronDown />
                </span>
              </td>
              <td>Country</td>
              <td>Posting date</td>
              <td>Cost</td>
              <td>Dateline</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {tData.map((data) => (
              <>
                <tr className="border-t-[1px] text-semiBold">
                  <td className="pl-2 py-2">
                    <span className="font-semibold">{data.name}</span>
                    <br />
                    <span>{data.description}</span>
                  </td>
                  <td>{data.country}</td>
                  <td>{data.posting_date}</td>
                  <td>${data.cost}</td>
                  <td>{data.dateline}</td>
                  <td className=" text-primary my-2">
                    <div className="flex gap-2">
                      <Details type={"uploadProject"} data={data}></Details>
                      <button className="px-2 py-1 rounded-md border-2 border-primary">
                        <span className="flex gap-2">
                          <MdOutlineFileDownload className="mt-1" /> Download
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

export default UserTable;
