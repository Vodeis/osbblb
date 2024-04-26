import { FC } from "react";
import { NavLink } from "react-router-dom";

interface tab {
  href: string;
  name: string;
}

interface NavTabsProps {
  tabs: tab[];
}

const NavTabs: FC<NavTabsProps> = ({ tabs }) => {
  return (
    <nav className="flex gap-4 mb-4">
      {tabs.map((tab) => (
        <NavLink
          key={tab.href}
          to={tab.href}
          className={({ isActive }) =>
            isActive ? "pointer-events-none  bg-gray-200 p-4 rounded" : "p-4 rounded"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavTabs;
