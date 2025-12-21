import React from "react";
import Logo from "../../ui/Logo/logo";
import PageNav from "../../ui/PageNav";
import SocialLink from "../../ui/SocialLink/SocialLink";

const Footer = () => {
  return (
    <div className="my-6 md:my-10 border rounded-3xl p-5 md:p-10 flex flex-col gap-6 md:gap-15 border-neutral-800-light dark:border-neutral-800 bg-neutral-950-light dark:bg-neutral-950">
      <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between">
        <Logo />
        <h2 className="md:w-70 md:!text-dlg">LET'S DISCUSS YOUR IDEAS</h2>
      </div>
      <hr className="text-neutral-800" />
      <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
        <PageNav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm" />
        <div className="flex gap-4">
          <SocialLink alt="facebook" />
          <SocialLink alt="instagram" />
          <SocialLink alt="linkedin" />
          <SocialLink alt="Tiktok" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
