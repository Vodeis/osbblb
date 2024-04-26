import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <main className="wrapper">
      <h1 className="text-2xl font-bold text-center">Профіль</h1>
      <ul className="flex gap-4 mb-4">
        <li className="">
          <NavLink
            to="apartments"
            className={({ isActive }) =>
              isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
            }
          >
            Мої квартири
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="info"
            className={({ isActive }) =>
              isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
            }
          >
            Мої дані
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default Profile;
