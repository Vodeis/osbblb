import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

const AppLayout: React.FC = () => {
  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = () => {
    setPopupOpened(true);
  };

  const closePopup = () => {
    setPopupOpened(false);
  };

  // const switchPopup = () => {
  //   setPopupOpened(!popupOpened);
  // };

  return (
    <div className="h-full flex flex-col">
      {popupOpened && <Popup closePopup={closePopup} />}
      <Header openPopup={openPopup} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
