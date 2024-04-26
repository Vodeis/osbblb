import { FC } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";

const Flat: FC = () => {
  const params: { id?: string } = useParams();

  return (
    <main className="wrapper">
      <h1 className="text-2xl font-bold text-center">Квартира №{params.id}</h1>
      <ul className="flex gap-4 mb-4">
        <li className="">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
            }
          >
            Лічильники
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="info"
            className={({ isActive }) =>
              isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
            }
          >
            Дані
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default Flat;
