import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import { userLogIn } from "../store/authSlice";
import { useAppDispatch } from "../hooks";

import text from "../text/text.json";

import Button from "./Button";

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const [phone, setPhone] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone !== null && phone.toString().length === 9) {
      dispatch(userLogIn());
      setError(false);
      closePopup();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-black/50 backdrop-blur-sm fixed top-0 left-0 z-10"
        onClick={closePopup}
      >
        <div
          className="p-8 bg-white rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <form className="flex flex-col gap-4 w-full" onSubmit={submitForm}>
            <label htmlFor="phone">{text.popup.label}</label>
            <PatternFormat
              name="phone"
              allowEmptyFormatting
              format="+38 (0##) ###-##-##"
              mask="_"
              className="px-4 py-2 border rounded-md shadow-sm"
              value={phone}
              onValueChange={({ floatValue = null }) => {
                setPhone(floatValue);
              }}
            />
            {error && <p className="text-xs text-red-500">{text.popup.error}</p>}
            <Button classes="btn--primary" text={text.btnLogIn} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
