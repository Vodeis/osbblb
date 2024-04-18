import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import text from "../text/text.json";
import logo from "../assets/img/logo.png";

import Button from "./Button";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [auth] = useState<boolean>(false);
  const userName: string = "UserName";

  return (
    <header className={cn("relative z-20")}>
      <div className="wrapper flex items-center justify-between py-4">
        <div
          className={cn("burger md:hidden", { active: activeMenu })}
          onClick={(event) => {
            event.stopPropagation();
            setActiveMenu(!activeMenu);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Link className="w-12" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div
          className={cn(
            "absolute top-0 left-0 w-full transition-transform duration-300 bg-white rounded-b pb-6",
            "md:static md:transform-none md:rounded-none md:pb-0 md:w-auto",
            {
              "-translate-y-full": !activeMenu,
              "top-20": activeMenu,
            }
          )}
        >
          <ul
            className={cn(
              "wrapper flex flex-col gap-4 border-y-2 py-6",
              "md:flex-row md:py-0 md:border-none"
            )}
          >
            {text.nav.map(({ href, name }, idx) => (
              <li key={idx}>
                <Link
                  className="p-0 text-sm underline underline-offset-4 md:text-lg"
                  to={href}
                  onClick={() => setActiveMenu(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row">
          <Button
            classes={auth ? "btn--primary" : "btn--secondary"}
            text={auth ? userName : text.btnLogIn}
          />
          {!auth && (
            <Button classes={"btn--primary ml-4 hidden lg:block"} text={text.btnRegistration} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
