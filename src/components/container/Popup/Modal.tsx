import React, { useState } from "react";
import Button from "../../ui/Button";

type popup = {
  open: boolean;
  onClose: () => void;
};
// fix this component, and there's more props you can use here
const Modal = ({ open, onClose }: popup) => {
  if (!open) return null;
  return (
    <div className="fixed flex left-0 right-0 bottom-0 top-0 z-100 items-center align-middle justify-center bg-black-message">
      <div className=" dark:bg-black bg-white rounded-2xl border border-neutral-800-light dark:border-neutral-800 w-[353px] md:w-[518px] flex flex-col items-center">
        <div className="h-[225px] rounded-t-2xl bg-neutral-950-light dark:bg-neutral-950 w-full flex justify-center">
          <img src="../../../public/Message.svg" alt="" />
        </div>
        <div className="flex flex-col items-center text-center pt-6 md:pt-8 px-6 md:px-8 pb-10 gap-6 md:gap-8">
          <h4 className="md:!text-xl font-bold !text-lg">Message Received</h4>
          <p className="text-neutral-400 text-sm md:text-md">
            Thanks for reaching out — we’ll get back to you as soon as possible.
          </p>
          <div className="w-full md:w-[361px]">
            <Button desc="Back to Home" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
