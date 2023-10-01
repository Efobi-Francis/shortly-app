import React from "react";

export default function BoostLink() {
  return (
    <>
      <div className="bg-[hsl(257,27%,26%)]">
        <div className=" container flex flex-col justify-center items-center bg-boost-bg-mobile bg-cover bg-no-repeat h-80 lg:bg-boost-bg-desktop lg:bg-center lg:h-60">
          <h4 className=" text-white text-3xl font-bold mt-4 lg:text-4xl lg:mt-8">
            Boost your links today
          </h4>
          <button className="my-5 text-white text-2xl font-medium bg-[hsl(180,66%,49%)] px-12 py-3 rounded-full hover:bg-[hsl(180,61%,74%)] lg:my-10">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
