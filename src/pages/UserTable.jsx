import { useState } from "react";

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
      <div className="flex justify-between">
        <input
          type="text"
          className="px-6 h-9 rounded-md placeholder:text-medium "
          placeholder="Search"
        />
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
      <div>
        <table className="w-full">
          <tr className="text-left">
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
