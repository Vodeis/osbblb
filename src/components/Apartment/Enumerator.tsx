import { FC, useState } from "react";
import { PatternFormat } from "react-number-format";
import cn from "classnames";
import text from "../../text/text.json";

interface EnumeratorProps {
  id: number;
  meterNum: number;
  name: string;
  company: string;
  previousData: string;
  currentData: string | null;
  handleChange: (id: number, value: string, choosed: boolean) => void;
}

const Enumerator: FC<EnumeratorProps> = ({
  id,
  meterNum,
  name,
  company,
  previousData,
  currentData,
  handleChange,
}) => {
  const { title, previousDataTitle, currentDataTitle } = text.enumerator;

  const [error, setError] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const checkValue = (choosed: boolean = checked, value: string | null = currentData) => {
    if (!value) return;

    if (value.length === 5 && Number(value) < Number(previousData)) {
      setError(true);
    } else {
      setError(false);
    }
    handleChange(id, value, choosed);
  };

  return (
    <li className="flex p-4 gap-4 border rounded-lg shadow-sm">
      <div className="">
        <input
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            checkValue(!checked);
          }}
          type="checkbox"
          className="relative top-2/4 -translate-y-2/4 appearance-none shrink-0 w-6 h-6 border-2 border-gray-400 rounded-full bg-white focus:outline-none checked:bg-yellow-400 checked:border-4 checked:border-gray-100 checked:ring-1 checked:ring-yellow-400 disabled:border-steel-400 disabled:bg-steel-400"
          name="enumerator"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:w-full gap-2">
        <div className="flex flex-col justify-between gap-2">
          <p className="text-gray-400">{title + meterNum}</p>
          <p className="font-bold">{name}</p>
          <p>{company}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium">{previousDataTitle}</p>
          <p className="text-gray-500 md:py-2">{previousData}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium">{currentDataTitle}</p>
          <PatternFormat
            disabled={!checked}
            allowEmptyFormatting
            format="#####"
            mask="X"
            className={cn(
              "px-4 py-2 border rounded-sm shadow-sm",
              { "border-red-500": error },
              { "outline-red-500": error }
            )}
            value={currentData}
            onValueChange={({ value }) => {
              checkValue(undefined, value);
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default Enumerator;
