import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 h-8">
      <img
        src="../../../public/logo-symbol.svg"
        alt="logo-symbol"
        className="hidden dark:flex"
      />
      <img
        src="../../../public/logo-symbol-light.svg"
        alt="logo-symbol"
        className="flex dark:hidden"
      />
      <h5 className="font-semibold text-2xl">Your Logo</h5>
    </div>
  );
};

export default Logo;
