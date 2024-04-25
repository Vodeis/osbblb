import React from "react";
import { useAppDispatch } from "../hooks";
import { userLogOut } from "../store/authSlice";
import { Link } from "react-router-dom";

import text from "../text/text.json";

interface ProfileNavProps {
  closeProfile: () => void;
}

const ProfileNav: React.FC<ProfileNavProps> = ({ closeProfile }) => {
  const dispatch = useAppDispatch();

  const getImgUrl = (name: string) => {
    return new URL(`../assets/img/profile/${name}.svg`, import.meta.url).href;
  };

  const logout = () => {
    dispatch(userLogOut());
  };

  return (
    <ul className="absolute top-20 right-4 bg-white flex flex-col gap-6 border rounded-lg p-6 shadow-md">
      {text.profileNav.map(({ img, text, href, type }, idx) => (
        <li onClick={closeProfile} key={idx}>
          {type === "link" && href ? (
            <Link to={href} className="flex items-center gap-3 cursor-pointer">
              <img className="w-6 h-6" src={getImgUrl(img)} alt={text} />
              <p>{text}</p>
            </Link>
          ) : (
            <button onClick={logout} className="flex items-center gap-3 cursor-pointer">
              <img className="w-6 h-6" src={getImgUrl(img)} alt={text} />
              <p>{text}</p>
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProfileNav;
