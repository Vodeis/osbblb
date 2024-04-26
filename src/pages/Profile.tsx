import { FC } from "react";
import { Outlet } from "react-router-dom";

import text from "../text/text.json";
import NavTabs from "../components/NavTabs";

const Profile: FC = () => {
  return (
    <main className="wrapper">
      <h1 className="text-2xl font-bold text-center mb-4">Профіль</h1>
      <NavTabs tabs={text.profile.tabs} />
      <Outlet />
    </main>
  );
};

export default Profile;
