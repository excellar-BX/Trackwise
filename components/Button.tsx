import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
  icon?: React.ReactNode;
  color?: string ;
  width?: string;
  paddingX?: string;
  className?: string;
  link?: string;
  disabled?: boolean;
};

const Button = ({
  text,
  icon,
  color,
  type,
  className,
  disabled,
  link,
}: ButtonProps) => {
  return (
    <>
      {link ? (
        <Link href={`${link}`}>
          <button
            type={type}
            disabled={disabled}
            className={`${className} border-none outline-none bg-green-600 hover:bg-green-600/80 ${color? color : "text-[#fff]"} gap-3 w-fit flex flex-row items-center px-4 py-2 rounded-full ${color}`}
          >
            {text} {icon}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`${className} border-none outline-none bg-green-600 hover:bg-green-600/80 ${color? color : "text-[#fff]"}  gap-3 w-fit flex flex-row items-center px-4 py-2 rounded-full ${color}`}
        >
          {text} {icon}
        </button>
      )}
    </>
  );
};

export default Button;
