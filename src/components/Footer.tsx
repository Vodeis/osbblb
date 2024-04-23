import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import text from "../text/text.json";
import logo from "../assets/img/logo.png";

const Footer: React.FC = () => {
  const [open, setOpen] = useState<boolean[]>([false, false]);

  const switchTabs = (idx: number) => {
    setOpen((state) => {
      const newState = [...state];
      newState[idx] = !state[idx];
      return newState;
    });
  };

  return (
    <footer className="py-4 md:py-6">
      <div className="wrapper flex flex-col md:flex-row md:items-center md:justify-evenly">
        <div className="flex flex-col items-center">
          <Link className="block w-28" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {text.footer.tabs.map((item, idx) => (
          <div className="overflow-hidden" key={idx}>
            <div
              className="flex items-center justify-between font-medium py-4 mb-4 border-b-2 md:hidden"
              onClick={() => {
                switchTabs(idx);
              }}
            >
              <p className="text-sm">{item}</p>
              <p className={cn("w-6 text-center", open[idx] ? "rotate-90" : "-rotate-90")}>
                &#8249;
              </p>
            </div>
            <ul
              className={cn(
                "transition-[max-height] duration-300 ease-in-out text-gray-500 font-medium text-sm space-y-2",
                open[idx] ? "max-h-52" : "max-h-0",
                { "text-center": idx },
                "md:max-h-52"
              )}
            >
              {text[!idx ? "nav" : "contacts"].map(({ href, name }, i) => (
                <li className={idx + 1 === text.nav.length ? "hidden md:block" : ""} key={i}>
                  {!idx ? <Link to={href}>{name}</Link> : <a href={href}>{name}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
