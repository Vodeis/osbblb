import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "./AppLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import DocumentComponent from "../components/DocumentComponent";
import Contacts from "../pages/Contacts";
import Dashboard from "../components/Apartment/Dashboard";
import ApartmentInfo from "../components/Apartment/ApartmentInfo";
import Apartments from "../components/Profile/Apartments";
import GeneralUserInfo from "../components/Profile/UserInfo";

import ProtectedUserRoute from "./ProtectedUserRoute";
import ProtectedFlatRoute from "./ProtectedApartmentRoute";

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
        path: "profile",
        element: <ProtectedUserRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="apartments" replace />,
          },
          {
            path: "apartments",
            element: <Apartments />,
          },
          {
            path: "info",
            element: <GeneralUserInfo />,
          },
        ],
      },
      {
        path: "apartment/:id",
        element: <ProtectedFlatRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "info",
            element: <ApartmentInfo />,
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
