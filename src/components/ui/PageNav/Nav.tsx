import React from "react";

type Nav = {
  className: string;
};

const PageNav = ({ className }: Nav) => {
  return (
    <nav className={`${className} `}>
      <a href="#about" className="md:px-4 md:py2 a-link">
        About
      </a>
      <a href="#service" className="md:px-4 md:py2 a-link">
        Service
      </a>
      <a href="#projects" className="md:px-4 md:py2 a-link">
        Projects
      </a>
      <a href="#testimonials" className="md:px-4 md:py2 a-link">
        Testimonials
      </a>
      <a href="#faq" className="md:px-4 md:py2 a-link">
        FAQ
      </a>
    </nav>
  );
};

export default PageNav;
