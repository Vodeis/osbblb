import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <main className="wrapper">
      <h1 className="text-2xl font-bold text-center mb-4">Профіль</h1>
      <nav className="flex gap-4 mb-4">
        <NavLink
          to="apartments"
          className={({ isActive }) =>
            isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
          }
        >
          Мої квартири
        </NavLink>
        <NavLink
          to="info"
          className={({ isActive }) =>
            isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
          }
        >
          Мої дані
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default Profile;
