import { FC } from "react";
import { Link } from "react-router-dom";
import apartmentImg from "../../assets/img/profile/apartment.svg";

interface ApartmentPreviewProps {
  flat: string;
  entrance: string;
  floor: string;
  area: string;
}

const ApartmentPreview: FC<ApartmentPreviewProps> = ({ flat, entrance, floor, area }) => {
  return (
    <>
      <li className="flex flex-col items-start gap-2 p-4 border rounded-lg shadow-sm">
        <div className="flex items-center justify-start gap-2">
          <img src={apartmentImg} alt="flat" />
          <p className="text-lg font-bold">Квартира №{flat}</p>
        </div>
        <p className="text-base">вул. Ованеса Туманяна 15А</p>
        <p className="text-base">
          Підїзд <span className="font-medium">{entrance}</span>, поверх{" "}
          <span className="font-medium">{floor}</span>
        </p>
        <p className="text-base">
          Загальна площа: <span className="font-medium">{area} м2</span>
        </p>
        <Link to={"/apartment/" + flat} className="btn btn--secondary">
          Перейти
        </Link>
      </li>
    </>
  );
};

export default ApartmentPreview;
