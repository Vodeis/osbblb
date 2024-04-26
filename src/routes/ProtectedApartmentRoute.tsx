import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import Flat from "../pages/Apartment";

const ProtectedApartmentRoute = () => {
  const auth = useAppSelector((state) => state.auth.isLogIn);

  return auth ? <Flat /> : <Navigate to="/" />;
};

export default ProtectedApartmentRoute;
