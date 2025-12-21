import React from "react";

type Buttontype = {
  desc: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const AncorButton = ({ desc }: Buttontype) => {
  return (
    <a
      href="#FormTalk"
      className="flex items-center justify-center h-11 cursor-pointer text-white md:w-[200px] inset-shadow-btn hover:inset-shadow-btn-hover bg-primary-200 active:opacity-90 rounded-full font-bold text-[14px]"
    >
      {desc}
    </a>
  );
};

const Button = ({ desc, type = "button", onClick, className }: Buttontype) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} h-11 cursor-pointer text-white w-full inset-shadow-btn bg-primary-200 rounded-full font-bold hover:inset-shadow-btn-hover active:opacity-90 text-[14px]`}
    >
      {desc}
    </button>
  );
};

export default Button;
export { AncorButton };
