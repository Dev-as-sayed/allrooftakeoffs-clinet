import { createBrowserRouter } from "react-router-dom";
import User from "../Layout/user";
import UserTable from "../pages/userTable";
import Login from "../pages/Login";
import Ragister from "../pages/Ragister";
import AllUsersTable from "../pages/AllUsersTable";
import AdminProjectTable from "../pages/AdminProjectTable";
// import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/",
        element: <UserTable />,
      },
      {
        path: "/users",
        element: <AllUsersTable />,
      },
      {
        path: "/projects",
        element: <AdminProjectTable />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ragister",
    element: <Ragister />,
  },
]);
