import { createBrowserRouter } from "react-router-dom";
import User from "../Layout/user";
import UserTable from "../pages/userTable";
import Login from "../pages/Login";
import Ragister from "../pages/Ragister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/",
        element: <UserTable />,
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
