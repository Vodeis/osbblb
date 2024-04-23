import React from "react";
import { useAppSelector } from "../hooks";

const Profile: React.FC = () => {
  const auth = useAppSelector((state) => state.auth.isLogIn);

  return (
    <>
      {auth ? (
        <main className="wrapper">Profile Page</main>
      ) : (
        <main className="wrapper">LogIn Page</main>
      )}
    </>
  );
};

export default Profile;
