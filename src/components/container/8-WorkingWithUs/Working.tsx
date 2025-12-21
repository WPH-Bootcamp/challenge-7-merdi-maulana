import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type PortofolioType = {
  desc: string;
  name: string;
  Prof: string;
  Profimg: string;
};

const Portofolio = ({ desc, name, Prof, Profimg }: PortofolioType) => {
  return (
    <div className="testimonial-card rounded-2xl p-[1px] bg-neutral-900-light dark:bg-neutral-900  hover:bg-gradient-to-br hover:from-primary-200 from-5%% hover:to-neutral-900-light dark:hover:to-neutral-900 to-40% transition z-0">
      <div className="testimonial-card md:max-w-[594px] md:min-w-[594px] relative p-4 md:p-6 justify-center h-full bg-neutral-950-light dark:bg-neutral-950  rounded-2xl pb-14 md:pb-16 flex flex-col gap-4 w-full overflow-visible z-10">
        <img
          src="/Vector.svg"
          alt="vector"
          className="absolute -top-7 left-6"
        />
        <img src="/Rating.svg" alt="Rating" className="h-6 " />

        <p className="font-semibold text-sm md:text-md">"{desc}"</p>
        <p className="font-semibold text-sm md:text-md">{name}</p>
        <h6 className="font-semibold text-sm md:text-md text-primary-200">
          {Prof}
        </h6>

        <img
          src={`/${Profimg}.png`}
          alt={Profimg}
          className="absolute h-15 md:h-19 -bottom-6 md:-bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        />
      </div>
    </div>
  );
};

const Working = () => {
  const data = [
    {
      desc: "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
      name: "John Lee",
      Prof: "Creative Director at Innovate Corp",
      Profimg: "Profile1",
    },
    {
      desc: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
      name: "Sarah Tan",
      Prof: "Product Manager at Finovate",
      Profimg: "Profile2",
    },
    {
      desc: "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
      name: "Emily Chen",
      Prof: "Marketing Head at Tech Solutions",
      Profimg: "Profile3",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots custom-dots",

    slidesToShow: 1,
    centerMode: true,
    className: "center",
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="text-center pt-10 pb-22 flex flex-col gap-10 md:gap-20 overflow-hidden"
    >
      <div className="flex flex-col gap-[11px]">
        <h2>What Partners Say About Working With Us</h2>
        <p className="text-neutral-400 text-sm md:text-lg">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>
      <div>
        <div className="inset-ring-8 inset-ring-white dark:inset-ring-black bg-neutral-950-light inset-shadow-[0_0_400px_rgba(255,255,255,1)] dark:bg-neutral-950 dark:inset-shadow-[0_0_400px_rgba(0,0,0,1)] h-80 absolute left-40 right-40"></div>
        <div className="mx-auto w-full md:w-[594px] max-w-[594px]] testimonial-slider ">
          <Slider {...settings}>
            {data.map((item, idx) => (
              <div key={idx}>
                <Portofolio {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Working;
