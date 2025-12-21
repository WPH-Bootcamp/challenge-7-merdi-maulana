import React from "react";

type CardType = {
  src: string;
  title: string;
  desc: string;
};

const Card = ({ src, title, desc }: CardType) => {
  return (
    <div className="rounded-2xl p-[1px] bg-neutral-900-light dark:bg-neutral-900  hover:bg-gradient-to-br hover:from-primary-200 from-5%% hover:to-neutral-900-light dark:hover:to-neutral-900 to-40% transition">
      <div className="rounded-[15px] h-full bg-neutral-950-light dark:bg-neutral-950 px-5 py-12 md:pb-5">
        <div className="relative mt-[-75px]">
          <img
            className=""
            src={`../../../public/solution-${src}.svg`}
            alt={`${src}`}
          />
        </div>
        <div className="flex flex-col text-left">
          <h4 className="font-bold text-md md:text-xl mb-1">{title}</h4>
          <p className="text-sm md:text-md text-neutral-400">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <div className="py-10 md:py-20 flex flex-col text-center gap-10 md:gap-16">
      <div>
        <h2>Smart IT Solutions That Grow With You</h2>
        <p className="text-neutral-400 text-lg mt-[11px]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-5">
        <Card
          src="Web"
          title="Web Development"
          desc="Build fast, scalable, and SEO-friendly websites."
        />
        <Card
          src="Mobile"
          title="Mobile App Development"
          desc="Native & cross-platform apps tailored to user needs."
        />
        <Card
          src="UX"
          title="UI/UX Design"
          desc="Delight users with intuitive and beautiful interfaces"
        />
        <Card
          src="Cloud"
          title="Cloud Solutions"
          desc="Secure and flexible cloud infrastructure for your growth."
        />
        <Card
          src="Software"
          title="Software Development"
          desc="Custom solutions built around your business logic."
        />
        <Card
          src="IT-Infra"
          title="IT Infrastructure"
          desc="Scale your backend with reliable tech foundations."
        />
        <Card
          src="Cybersecurity"
          title="Cybersecurity Services"
          desc="Stay protected with enterprise-grade security."
        />
        <Card
          src="QA"
          title="QA Solutions"
          desc="Ensure performance with rigorous testing frameworks."
        />
        <Card
          src="IT-Cons"
          title="IT Consulting & Support"
          desc="Make smarter tech decisions with expert guidance."
        />
      </div>
    </div>
  );
};

export default Solution;
