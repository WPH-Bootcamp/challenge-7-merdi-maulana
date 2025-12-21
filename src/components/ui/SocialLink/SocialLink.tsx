import React from "react";

type SocialType = "Tiktok" | "facebook" | "instagram" | "linkedin";
type SocialLinkProps = {
  alt: SocialType;
};

const SOCIAL_CONFIG: Record<SocialType, { href: string; icon: string }> = {
  Tiktok: {
    href: "https://www.tiktok.com/@namachannel",
    icon: "../../../public/tiktok-logo.svg",
  },
  facebook: {
    href: "https://facebook.com/username",
    icon: "../../../public/facebook-logo.svg",
  },
  instagram: {
    href: "https://instagram.com/username",
    icon: "../../../public/instagram-logo.svg",
  },
  linkedin: {
    href: "https://linkedin.com/in/username",
    icon: "../../../public/linkedin-logo.svg",
  },
};

const SocialLink = ({ alt }: SocialLinkProps) => {
  const { href, icon } = SOCIAL_CONFIG[alt];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 flex justify-center items-center p-2 rounded-full
                 border hover:bg-primary-200 active:opacity-90 border-neutral-800-light dark:border-neutral-800
                 dark:bg-black"
    >
      <img
        src={icon}
        alt={alt}
        className="filter-[invert(1)] dark:filter-[invert(0)]"
      />
    </a>
  );
};

export default SocialLink;
