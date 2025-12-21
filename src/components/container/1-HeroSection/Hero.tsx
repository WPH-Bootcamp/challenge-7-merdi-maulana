import React from "react";
import { AncorButton } from "../../ui/Button/Button.tsx";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row md mt-[125px] md:mt-0 "
    >
      <div className="md:mt-[230px] md:w-[653px] z-10">
        <h1>
          Your Tech Partner for{" "}
          <span className="text-primary-200">Smarter Growth</span>
        </h1>
        <p className="font-semibold md:font-medium md:text-xl text-md text-neutral-25">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
        <div className="my-10 w-full md:w-[200px]">
          <AncorButton desc="let's Talk" />
        </div>
      </div>
      <div className="md:absolute right-0 md:top-0 z-0 my-4">
        <div className="dark:hidden flex">
          <div className="md:h-[747px] md:w-[747px] inset-shadow-comp-hero-light md:absolute" />
          <img
            src="../../../public/hero-img-light-theme.svg"
            alt="hero-img"
            className="h-[747px]"
          />
        </div>
        <div className="dark:flex hidden">
          <div className="md:h-[747px] w-full h-full md:w-[747px] inset-shadow-comp-hero md:absolute" />
          <img
            src="../../../public/hero-img-dark-theme.svg"
            alt="hero-img"
            className="inset-shadow-comp-hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
