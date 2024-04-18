import React from "react";
import cn from "classnames";

interface ButtonProps {
  text: string;
  classes?: string;
}

const Button: React.FC<ButtonProps> = ({ text, classes }) => {
  return <button className={cn("btn", classes)}>{text}</button>;
};

export default Button;
