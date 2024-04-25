import React from "react";
import cn from "classnames";

interface ButtonProps {
  text: string;
  classes?: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, classes, handleClick, disabled = false }) => {
  return (
    <button className={cn("btn", classes)} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
