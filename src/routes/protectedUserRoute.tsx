import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";

const ProtectedUserRoute = () => {
  const auth = useAppSelector((state) => state.auth.isLogIn);

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedUserRoute;
