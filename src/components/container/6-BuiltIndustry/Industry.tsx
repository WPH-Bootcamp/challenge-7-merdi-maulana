import React, { useState } from "react";

type CardId = "fintech" | "e-commerce" | "healthcare";

type CardItem = {
  id: CardId;
  title: string;
  desc: string;
};

const Cards: CardItem[] = [
  {
    id: "fintech",
    title: "Fintech",
    desc: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    desc: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    desc: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
  },
];

const Industry = () => {
  const [activeCard, setActiveCard] = useState<CardId>("fintech");

  return (
    <div className="py-10 md:py-20 flex flex-col gap-6 md:gap-16">
      <div>
        <h2 className="text-dmd mb-[11px]">Built for Your Industry</h2>
        <p className="text-neutral-400 text-sm md:text-lg">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between">
        <nav className="flex flex-col gap-3 md:gap-6">
          {Cards.map((card) => {
            const isActive: boolean = activeCard === card.id;

            return (
              <button
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                type="button"
                className="flex gap-1.5 md:gap-2 items-center transition cursor-pointer"
              >
                <span
                  className={`w-1 h-6 md:h-[34px] rounded-full transition ${
                    isActive ? "bg-primary-200" : "bg-neutral-600 "
                  }`}
                />
                <span
                  className={`font-bold transition text-md md:text-xl ${
                    isActive
                      ? "text-neutral-25-light dark:text-white"
                      : "text-neutral-600-light dark:text-neutral-600"
                  }`}
                >
                  {card.title}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="md:w-[840px]">
          {Cards.map((card) => {
            const isActive: boolean = activeCard === card.id;

            return (
              <div
                key={card.id}
                className={`flex flex-col gap-5 transation ${
                  isActive ? "block" : "hidden"
                }`}
              >
                <p className="text-sm md:text-lg font-medium text-neutral-25">
                  {card.desc}
                </p>
                <img
                  src={`../../../public/img-${card.title}.png`}
                  alt={card.title}
                  className="h-[222px] md:h-full object-cover rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industry;
