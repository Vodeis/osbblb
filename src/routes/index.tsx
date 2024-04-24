import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "./AppLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import DocumentComponent from "../components/DocumentComponent";
import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";

import ProtectedUserRoute from "./protectedUserRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "*",
      //   element: <ErrorPage />,
      // },
      {
        path: "user",
        element: <ProtectedUserRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" replace />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "documents",
        element: <Documents />,
        children: [{ path: ":id", element: <DocumentComponent /> }],
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);
