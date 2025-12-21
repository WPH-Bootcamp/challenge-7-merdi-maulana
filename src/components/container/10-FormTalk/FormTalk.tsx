import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Modal from "../Popup";

const FormTalk = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setOpen(true);
  };
  return (
    <div id="FormTalk" className="md:mt-10 md:my-20 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-6 text-center md:w-180"
      >
        <div>
          <h2>Ready to Start? Let’s Talk.</h2>
          <p className="text-sm md:text-lg text-neutral-400 mt-4">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>
        <div className="text-left flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="namelbl">Name</label>
            <input
              type="text"
              className="nameinput"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="namelbl">Email</label>
            <input
              type="text"
              className="nameinput"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="namelbl">Message</label>
            <textarea
              className="nameinput"
              rows={4}
              placeholder="Enter your name"
              required
            />
          </div>
          <label htmlFor="services" className="namelbl">
            Services
          </label>
          <div className="flex flex-col md:flex-row gap-4 md:gap-20">
            <div className="flex flex-col gap-4">
              <Input NameID="Web Development" />
              <Input NameID="Mobile App Development" />
              <Input NameID="UI/UX Design" />
            </div>
            <div className="flex flex-col gap-4">
              <Input NameID="Cloud Solutions" />
              <Input NameID="Software Development" />
              <Input NameID="Other" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button desc="Send" type="submit" />
        </div>
      </form>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default FormTalk;
