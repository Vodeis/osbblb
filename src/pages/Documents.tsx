import React from "react";
import text from "../text/text.json";
import { Outlet, Link } from "react-router-dom";

const Documents: React.FC = () => {
  return (
    <main className="wrapper py-6 flex flex-row gap-20">
      <nav className="flex flex-col space-y-2">
        {text.documents.map(({ href, name }, idx) => (
          <Link to={href} key={idx}>
            {name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </main>
  );
};

export default Documents;
