import React, { useState } from "react";

import logo from "../assets/images/logo.svg";
import illustrationWorking from "../assets/images/illustration-working.svg";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick =(event)=> {
    setIsClicked(true)
  }

  const hamburgar = `bg-[hsl(257,7%,63%)] w-8 h-1 text-black`;

  return (
    <div className="container">
      <nav className="flex justify-between items-center pt-8 pb-5 ">
        <img src={logo} alt="logo" />

        {/* mobile hamburgar */}
        <button onClick={handleClick} className=" flex flex-col h-7 justify-between z-20">
          <span className={hamburgar}></span>
          <span className={hamburgar}></span>
          <span className={hamburgar}></span>

          {isClicked && (
            <div>
                <div className=" absolute inset-0 bg-black/30 h-screen w-full z-10"></div>
                <div className="mx-auto">
                    <div className=" absolute top-24 h-96 mx-4 px-10 flex flex-col items-center inset-x-0 text-white bg-[hsl(257,27%,26%)] rounded-lg z-20">
                        <div className=" flex flex-col w-full h-36 justify-between mt-10">
                            <a href="">Features</a>
                            <a href="">Pricing</a>
                            <a href="">Resources</a>
                        </div>

                        {/* horizontal line */}
                        <div className=" h-[1px] w-full bg-[hsl(0,0%,75%)]/50 my-8"></div>
                        <div className="flex flex-col w-full h-28 justify-between mb-10">
                            <a href="">Login</a>
                            <button href="" className=" my-5font-medium bg-[hsl(180,66%,49%)] px-10 py-3 rounded-full">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </button>

      </nav>

      <div className="relative h-[23rem]">
        <div className="absolute my-5 left-1 -right-36 ">
          <img src={illustrationWorking} alt="illustration-working" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className=" font-bold text-[hsl(255,11%,22%)] text-[2.5rem] my-5 leading-tight">
          More than just <br /> shorter links
        </h1>
        <p>
          Build your brand's recognition and <br /> get detailed insights on how your <br />
          links are performing.
        </p>
        <button className="my-5 text-white font-medium bg-[hsl(180,66%,49%)] px-10 py-3 rounded-full">Get Started</button>
      </div>
    </div>
  );
}