import { createBrowserRouter } from "react-router-dom";
import User from "../Layout/user";
import UserTable from "../pages/userTable";

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
]);
