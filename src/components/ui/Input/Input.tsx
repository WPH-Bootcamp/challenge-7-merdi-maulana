import React from "react";

type InpType = {
  NameID: string;
};

const Input = ({ NameID }: InpType) => {
  return (
    <div className="flex items-center gap-3">
      <div className="group grid size-4 grid-cols-1">
        <input
          id={NameID}
          name={NameID}
          type="checkbox"
          aria-describedby={`${NameID}-description`}
          className="col-start-1 row-start-1 appearance-none rounded-sm border border-neutral-800-light dark:border-white/10 bg-white/5 checked:border-primary-200 checked:bg-primary-200 indeterminate:border-primary-200 indeterminate:bg-primary-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200 disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 forced-colors:appearance-auto"
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-checked:opacity-100"
          />
          <path
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-indeterminate:opacity-100"
          />
        </svg>
      </div>
      <div>
        <label
          htmlFor={NameID}
          className="text-sm md:text-md md:font-medium dark:text-white"
        >
          {NameID}
        </label>
      </div>
    </div>
  );
};

export default Input;
