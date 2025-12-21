import React, { useState } from "react";

type CardType = {
  help: string;
  desc: string;
};

const Card = ({ desc, help }: CardType) => {
  const [open, setOpen] = useState(true);
  const [hidden, setHidden] = useState(0);
  return (
    <div className="flex transition flex-col gap-6 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer w-full justify-between text-md"
      >
        <span className="font-bold text-left text-lg">{help}</span>
        <span className="text-3xl">{open ? "+" : "-"}</span>
      </button>
      <p
        className={`${
          open ? "hidden" : "block"
        } text-neutral-400 text-sm transition-all duration-300 pr-4`}
      >
        {desc}
      </p>
    </div>
  );
};

const NHelp = () => {
  return (
    <div id="faq" className="py-10 gap-6 flex flex-col">
      <div className="flex flex-col gap-6 md:flex-row justify-between md:items-end">
        <h2 className="md:w-86">Need Help? Start Here.</h2>
        <p className="text-sm md:text-lg text-neutral-400 md:w-60">
          Everything you need to know — all in one place.
        </p>
      </div>
      <hr className="hidden md:block text-neutral-800" />
      <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-18 items-center">
        <div className="flex flex-col gap-6 w-full">
          <Card
            help="What services do you offer?"
            desc="We provide custom web/app development, cloud solutions, UX/UI design, and more."
          />{" "}
          <hr className=" text-neutral-800" />
          <Card
            help="How do I know if this is right for my business?"
            desc="Book a free consult — we’ll assess your goals and recommend the right approach."
          />{" "}
          <hr className=" text-neutral-800" />
          <Card
            help="How much does a project cost?"
            desc="Every project is different. Let’s talk about your needs to get a tailored estimate."
          />{" "}
          <hr className=" text-neutral-800" />
          <Card
            help="How long does it take?"
            desc="Depends on scope — but we always prioritize quality and deadlines."
          />{" "}
          <hr className=" text-neutral-800" />
          <Card
            help="Can I start with a small project first?"
            desc="Absolutely. We often begin with MVPs or pilot projects."
          />
        </div>
        <div className="bg-primary-300 flex flex-col h-fit p-5 rounded-2xl gap-4">
          <div>
            <h2 className="text-white tracking-tight">Let’s talk it through</h2>
            <h6 className="font-semibold text-sm dark:!text-white">
              book a free consultation with our team.
            </h6>
          </div>
          <img
            src="../../../public/consultation-img.png"
            alt="consultant-img"
          />
          <a
            href="#FormTalk"
            className="flex justify-center items-center bg-black dark:bg-white text-white dark:text-black inset-shadow-btn h-11 rounded-full font-bold text-md"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default NHelp;
