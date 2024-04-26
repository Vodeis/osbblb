import { FC } from "react";
import text from "../../text/text.json";
import NavTabs from "../NavTabs";
import { Outlet } from "react-router-dom";

const Dashboard: FC = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl my-4">{text.enumeratorsPage.title}</h1>

      <NavTabs tabs={text.enumeratorsPage.tabs} />
      <Outlet />
    </div>
  );
};

export default Dashboard;
