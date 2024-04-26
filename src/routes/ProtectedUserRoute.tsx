import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import Profile from "../pages/Profile";

const ProtectedUserRoute = () => {
  const auth = useAppSelector((state) => state.auth.isLogIn);

  return auth ? <Profile /> : <Navigate to="/" />;
};

export default ProtectedUserRoute;
