import React, { useState } from "react";

function Topbanner() {
  const [showContact, setShowContact] = useState(true);

  return (
    <>
      {showContact ? (
        <div class="relative isolate bg-green-600    font-mono text-center flex items-center z-50 gap-x-6 overflow-hidden bg-slate-500 py-1.5 px-6 sm:px-3.5 sm:before:flex-1">
          <div class="flex flex-wrap items-center gap-y-2 gap-x-4  mx-80 px-40 ">
            <p class="text-md leading-6 text-white ">
              <strong class="font-semibold text-white">COMING SOON</strong>
              <svg
                viewBox="0 0 2 2"
                class="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="4" cy="4" r="8" />
              </svg>
              Opening in Bangalore
            </p>
            <div className="  text-white  px-2 rounded-xl text-2xl ">
              <button onClick={() => setShowModal(true)}>
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
          <div class="flex flex-1 justify-end">
            <button
              type="button"
              class="-m-2 p-2 focus-visible:outline-offset-[-4px]"
              onClick={() => setShowContact(false)}
            >
              <span class="sr-only">Dismiss</span>
              <svg
                class="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Topbanner;
