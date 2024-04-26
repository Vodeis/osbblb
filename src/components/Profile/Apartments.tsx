import { FC } from "react";

import ApartmentPreview from "./ApartmentPreview";

const Apartments: FC = () => {
  const flatsData = [
    { flat: "1", entrance: "1", floor: "1", area: "100" },
    { flat: "2", entrance: "2", floor: "2", area: "200" },
    { flat: "3", entrance: "3", floor: "3", area: "300" },
  ];

  return (
    <main className="wrapper">
      <h1>Apartments Page</h1>

      <ul className="grid grid-cols-2 gap-4">
        {flatsData.map(({ flat, entrance, floor, area }) => (
          <ApartmentPreview key={flat} flat={flat} entrance={entrance} floor={floor} area={area} />
        ))}
      </ul>
    </main>
  );
};

export default Apartments;
