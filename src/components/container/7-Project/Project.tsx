import React from "react";

type PortofolioType = {
  src: string;
  title: string;
  desc: string;
};

const Portofolio = ({ src, title, desc }: PortofolioType) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer rounded-2xl  active:scale-95 hover:scale-110 transition">
      <img
        src={`../../../public/${src}.png`}
        alt={`img-${src}`}
        className="border-0 rounded-2xl"
      />
      <h4 className="text-sm text-primary-200">{title}</h4>
      <p className="font-bold text-md">{desc}</p>
    </div>
  );
};

const Project = () => {
  return (
    <div
      id="projects"
      className="py-10 md:py-20 flex flex-col gap-6 md:gap-16 text-center"
    >
      <div>
        <h2>From Vision to Launch! Projects We’re Proud Of</h2>
        <p className="text-neutral-400 md:text-lg mt-[11px]">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>
      <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-5">
        <Portofolio
          src="Portofolio1"
          title="Landing Page"
          desc="Portofolio 1"
        />
        <Portofolio
          src="Portofolio2"
          title="Landing Page"
          desc="Portofolio 2"
        />
        <Portofolio
          src="Portofolio3"
          title="Landing Page"
          desc="Portofolio 3"
        />
      </div>
    </div>
  );
};

export default Project;
