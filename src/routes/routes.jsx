import { createBrowserRouter } from "react-router-dom";
import User from "../Layout/user";
import UserTable from "../pages/userTable";
import Login from "../pages/Login";
import Ragister from "../pages/Ragister";
import AllUsersTable from "../pages/AllUsersTable";
import AdminProjectTable from "../pages/AdminProjectTable";
import PrivateRoutes from "./PrivateRoutes";
import AddNewProjects from "../pages/AddNewProjects";
import ProjectsView from "../pages/ProjectsView";
import UsersTabaleDetaile from "../Components/UsersTabaleDetaile";
// import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <UserTable />
          </PrivateRoutes>
        ),
      },
      {
        path: "/users",
        element: <AllUsersTable />,
      },
      {
        path: "/projects",
        element: <AdminProjectTable />,
      },
      {
        path: "/addNewProject",
        element: <AddNewProjects />,
      },
      {
        path: "/project/:id",
        element: <ProjectsView />,
      },
      {
        path: "/userProjects/:id",
        element: <UsersTabaleDetaile />,
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
