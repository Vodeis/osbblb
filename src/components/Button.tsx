import React from "react";
import cn from "classnames";

interface ButtonProps {
  text: string;
  classes?: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, classes, handleClick }) => {
  return (
    <button className={cn("btn", classes)} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
