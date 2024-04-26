import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "../hooks";
import text from "../text/text.json";
import logo from "../assets/img/logo.png";

import Button from "./Button";
import ProfileNav from "./ProfileNav";

interface HeaderProps {
  openPopup: () => void;
}

const Header: React.FC<HeaderProps> = ({ openPopup }) => {
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [profileOpened, setProfileOpened] = useState<boolean>(false);
  const userName = "UserName";
  const auth = useAppSelector((state) => state.auth.isLogIn);

  const switchProfileNav = () => {
    setProfileOpened(!profileOpened);
  };

  return (
    <header>
      <div className="wrapper relative flex items-center justify-between py-4">
        <div
          className={cn("burger md:hidden", { active: navOpened })}
          onClick={() => setNavOpened(!navOpened)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Link className="w-12" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav
          className={cn(
            "absolute top-0 left-0 w-full transition-transform duration-300 bg-white rounded-b pb-6",
            "md:static md:transform-none md:rounded-none md:pb-0 md:w-auto",
            { "-translate-y-full": !navOpened, "top-20": navOpened }
          )}
        >
          <ul className="wrapper flex flex-col gap-4 border-y-2 py-6 md:flex-row md:py-0 md:border-none">
            {text.nav.map(({ href, name }, idx) => (
              <li key={idx}>
                <Link
                  className={cn("p-0 text-sm underline underline-offset-4 md:text-lg", {
                    "text-center": idx + 1 === text.nav.length,
                  })}
                  to={href}
                  onClick={() => setNavOpened(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row">
          <Button
            classes={auth ? "btn--primary" : "btn--secondary"}
            text={auth ? userName : text.btnLogIn}
            handleClick={!auth ? openPopup : switchProfileNav}
          />
          {!auth && (
            <Button classes={"btn--primary ml-4 hidden lg:block"} text={text.btnRegistration} />
          )}
        </div>
        {auth && profileOpened && <ProfileNav closeProfile={() => setProfileOpened(false)} />}
      </div>
    </header>
  );
};

export default Header;
