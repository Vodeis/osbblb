import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../assets/img/404.png";

const ErrorPage: React.FC = () => {
  return (
    <main className="wrapper mb-10">
      <div className="text-center">
        <img className="mx-auto p-10" src={ErrorImg} alt="404" />
        <p className="text-5xl font-semibold">Сторінку не знайдено</p>
        <p className="text-base font-normal py-6">
          На жаль, запитану вами сторінку не знайдено. Будь ласка, поверніться на головну сторінку.
        </p>
        <Link to="/" className="btn btn--primary">
          На головну
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
