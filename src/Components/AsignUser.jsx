import { Button, Checkbox, Modal } from "antd";
import React from "react";

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
const AsignUser = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };
  return (
    <>
      <Button
        type="primary"
        className="bg-white text-textBlack border-secondary shadow-none "
        onClick={showLoading}
      >
        Assign user
      </Button>
      <Modal
        // title={<p>Loading Modal</p>}
        footer={
          <Button type="primary" className="w-full" onClick={showLoading}>
            Confirm
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
        width={300}
      >
        {users.map((user) => (
          <div
            key={user?.id}
            className="flex gap-2 my-3 justify-start items-center"
          >
            <Checkbox />
            <img src={user.image} className="w-10 rounded-full" alt="" />
            <p className="text-lg">{user.name}</p>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default AsignUser;
