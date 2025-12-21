import React, { useState } from "react";

type StepsType = {
  number: number;
  title: string;
  desc: string;
};

const Steps = ({ number, title, desc }: StepsType) => {
  const [open, setOpen] = useState(true);
  const isLeft = number % 2 !== 0;

  return (
    <div className="flex gap-3">
      <div
        className={`items-center flex 
          ${open ? "md:mt-8" : "md:mt-4"}
          md:absolute left-[calc(50%-24px)]`}
      >
        <h4 className="flex md:text-md h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-primary-200">
          {number}
        </h4>
      </div>

      <div
        className={`flex w-full ${
          isLeft ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <div className="grid gap-4 text-left p-4 md:p-6 rounded-2xl bg-neutral-950-light dark:bg-neutral-950 w-full md:w-[calc(50%-48px)] border border-neutral-900-light dark:border-neutral-900">
          <button
            onClick={() => setOpen(!open)}
            className="flex md:text-xl items-center justify-between font-bold text-md"
          >
            <span>{title}</span>
            <span className="text-xl font-mono select-none">
              {open ? "^" : "+"}
            </span>
          </button>

          <p
            className={`text-neutral-400 text-sm md:text-md transition-all duration-300 ${
              open ? "block" : "hidden"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div
      id="service"
      className="flex flex-col text-center gap-8 md:gap-16 py-10 md:py-20"
    >
      <div className="flex flex-col gap-[11px]">
        <h2>Our Process</h2>
        <p className="text-neutral-400 text-sm px-1 md:text-lg">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Steps
          number={1}
          title="Discovery & consultation"
          desc="Understand Your Needs & Goals"
        />
        <Steps
          number={2}
          title="Planning & Strategy"
          desc="Build a Clear, Scalable Roadmap"
        />
        <Steps
          number={3}
          title="Design & Prototyping"
          desc="Craft UX That Converts"
        />
        <Steps
          number={4}
          title="Development & Implementation"
          desc="Deliver With Speed & Precision"
        />
        <Steps
          number={5}
          title="Testing & Optimization"
          desc="Ensure Quality at Every Step"
        />
        <Steps
          number={6}
          title="Launch & Growth"
          desc="Scale, Measure & Improve Continuously"
        />
      </div>
    </div>
  );
};

export default Process;
