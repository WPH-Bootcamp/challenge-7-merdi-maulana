import React from "react";

type CardType = {
  title: string;
  desc: string;
};

const Card = ({ title, desc }: CardType) => {
  return (
    <div className="aspect-square 2xl:relative 2xl:left-1/3 border-neutral-900-light bg-neutral-950-light dark:bg-neutral-950 max-w-[275px] border dark:border-neutral-900 flex flex-col justify-center rounded-full gap-[6px] p-[18px]">
      <h4 className="text-dlg md:text-d2xl text-primary-200 font-bold">
        {title}
      </h4>
      <p className="font-semibold md:text-xl text-sm">{desc}</p>
    </div>
  );
};

const OurExperience = () => {
  return (
    <div className="flex flex-col text-center py-20 gap-6 md:gap-16">
      <div>
        <h2 className="md:text-dxl">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="text-sm text-neutral-400 md:text-lg mt-[11px]">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>
      <div className=" items-center grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        <Card title="50+" desc="Project Delivered" />
        <Card title="5+" desc="Years Of Experience" />
        <Card title="10+" desc="Industry Award Won" />
        <Card title="100%" desc="Client Satisfaction Rate" />
      </div>
    </div>
  );
};

export default OurExperience;
