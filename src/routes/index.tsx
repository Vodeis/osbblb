import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import DocumentComponent from "../components/DocumentComponent";
import Contacts from "../pages/Contacts";

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
