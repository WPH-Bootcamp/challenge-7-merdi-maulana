import React, { useState, useEffect } from "react";
import { AncorButton } from "../../ui/Button/Button.tsx";
import Logo from "../../ui/Logo/logo.tsx";
import PageNav from "../../ui/PageNav";
import Button from "../../ui/Button/Button.tsx";

type PopupProps = {
  open: boolean;
  onClose: () => void;
};

const MobileMenu = ({ open, onClose }: PopupProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] md:hidden">
      <div onClick={onClose} className="absolute inset-0 bg-black/80" />
      <header className="relative z-10 h-full bg-black text-white flex flex-col">
        <div className="flex justify-between align-middle items-center py-6 px-4">
          <Logo />

          <button onClick={onClose} className="text-dxl leading-none">
            ×
          </button>
        </div>

        <div className="px-4 flex flex-col gap-6">
          <button onClick={onClose} className="flex text-left gap-6">
            <PageNav className=" md:hidden flex flex-col font-semibold text-sm gap-5 md:gap-3 " />
          </button>
          <a href="#FormTalk" onClick={onClose}>
            <Button onClick={onClose} desc="Lets Talk" />
          </a>
        </div>
      </header>
    </div>
  );
};

const Topbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="flex px-4 md:px-35 backdrop-blur-2xl md:h-21 justify-between h-16 items-center fixed top-0 left-0 right-0 bg-white-header dark:bg-black-header border-b border-neutral-900-light dark:border-neutral-900 z-50">
        <Logo />

        <PageNav className="hidden md:flex md:gap-3" />

        <div className="hidden md:flex w-[197px]">
          <AncorButton desc="Let's Talk" />
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden cursor-pointer"
        >
          <img src="/menu-01.svg" alt="hamburger-btn" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Topbar;
