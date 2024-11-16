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
import AdminRoutes from "./AdminRoutes";
import AsignsdProjects from "../pages/AsignsdProjects";
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
        element: (
          <AdminRoutes>
            <AllUsersTable />
          </AdminRoutes>
        ),
      },
      {
        path: "/projects",
        element: (
          <AdminRoutes>
            <AdminProjectTable />
          </AdminRoutes>
        ),
      },
      {
        path: "/addNewProject",
        element: (
          <PrivateRoutes>
            <AddNewProjects />
          </PrivateRoutes>
        ),
      },
      {
        path: "/project/:id",
        element: (
          <PrivateRoutes>
            <ProjectsView />
          </PrivateRoutes>
        ),
      },
      {
        path: "/userProjects/:id",
        element: (
          <PrivateRoutes>
            <UsersTabaleDetaile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/asignedProjects/:id",
        element: (
          <AdminRoutes>
            <AsignsdProjects />
          </AdminRoutes>
        ),
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
