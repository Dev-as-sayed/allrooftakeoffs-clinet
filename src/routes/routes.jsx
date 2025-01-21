import { createBrowserRouter } from "react-router-dom";
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
import User from "../Layout/user";
import MyProjects from "../pages/MyProjects";
import EditProject from "../pages/EditProject";

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
        path: "/update-project/:id",
        element: (
          <PrivateRoutes>
            <EditProject />
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
        path: "/myProjects",
        element: (
          <PrivateRoutes>
            <MyProjects />
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
    path: "/ragister",
    element: <Ragister />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
