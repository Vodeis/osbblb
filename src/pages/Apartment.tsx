import { FC } from "react";
import { useParams, Outlet } from "react-router-dom";

import text from "../text/text.json";
import NavTabs from "../components/NavTabs";

const Flat: FC = () => {
  const params: { id?: string } = useParams();

  return (
    <main className="wrapper">
      <h1 className="text-2xl font-bold text-center mb-4">Квартира №{params.id}</h1>
      <NavTabs tabs={text.apartment.tabs} />
      <Outlet />
    </main>
  );
};

export default Flat;
