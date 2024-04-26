import { FC, useEffect, useState } from "react";
import Enumerator from "./Enumerator";
import Button from "../Button";
import text from "../../text/text.json";

interface Enumerator {
  id: number;
  name: string;
  company: string;
  previousData: string;
  currentData?: string;
  choosed?: boolean;
}

const EnumeratorsForm: FC = () => {
  const [formData, setFormData] = useState<Enumerator[]>([
    {
      id: 1,
      name: "ХВ SENSUS - 2.5 N1",
      company: "КПВОК “КИЇВТЕПЛОЕНЕРГО” централізоване постачання гарячої води",
      previousData: "10000",
    },
    {
      id: 2,
      name: "ХВ SENSUS - 2.5 N2",
      company: "КПВОК “КИЇВТЕПЛОЕНЕРГО” централізоване постачання гарячої води",
      previousData: "11000",
    },
    {
      id: 3,
      name: "ХВ SENSUS - 2.5 N3",
      company: "КПВОК “КИЇВТЕПЛОЕНЕРГО” централізоване постачання гарячої води",
      previousData: "12000",
    },
    {
      id: 4,
      name: "ХВ SENSUS - 2.5 N4",
      company: "КПВОК “КИЇВТЕПЛОЕНЕРГО” централізоване постачання гарячої води",
      previousData: "13000",
    },
    {
      id: 5,
      name: "ХВ SENSUS - 2.5 N5",
      company: "КПВОК “КИЇВТЕПЛОЕНЕРГО” централізоване постачання гарячої води",
      previousData: "14000",
    },
  ]);

  const [disabled, setDisabled] = useState<boolean>(true);

  const handleInputChange = (id: number, value: string, choosed: boolean) => {
    const updatedFormData = formData.map((item) =>
      item.id === id
        ? {
            ...item,
            currentData: value,
            choosed,
          }
        : item
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredData = formData.filter((item) => item.choosed && item.currentData);

    console.log(filteredData);
  };

  useEffect(() => {
    if (formData.filter((item) => item.choosed && item.currentData).length === 0) setDisabled(true);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-end">
      <ul className="w-full flex flex-col gap-4">
        {formData.map(({ id, name, company, previousData }, idx) => (
          <Enumerator
            key={idx}
            id={id}
            meterNum={idx + 1}
            name={name}
            company={company}
            previousData={previousData}
            currentData={formData.find((item) => item.id === id)?.currentData || null}
            handleChange={handleInputChange}
            blockSubmitBtn={(val) => setDisabled(val)}
          />
        ))}
      </ul>
      <Button disabled={disabled} text={text.btnTransferIndicators} classes="w-auto" />
    </form>
  );
};

export default EnumeratorsForm;
