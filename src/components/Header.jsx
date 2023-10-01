import React, { useState } from "react";

import logo from "../assets/images/logo.svg";
import illustrationWorking from "../assets/images/illustration-working.svg";
import iconClose from '../assets/images/icon-close.svg';

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClickOpen =(event)=> {
    event.preventDefault();
    setIsClicked(true)
  }

  const handleClickClose =(event)=> {
    event.preventDefault();
    setIsClicked(false)
  }

  let hideOpenIcon;
  if (isClicked) {
    hideOpenIcon = ` hidden`
  }

  let hideCloseIcon;
  if (!isClicked) {
    hideCloseIcon = ` hidden`
  }

  const hamburgar = `bg-[hsl(257,7%,63%)] w-8 h-1 text-black`;

  return (
    <div className="container lg:max-w-6xl lg:mx-auto">
      <nav className="flex justify-between items-center pt-8 pb-5 ">
        <a href=""><img src={logo} alt="logo" /></a>

        {/* mobile hamburgar */}
        <div className=" lg:hidden">
          <button onClick={handleClickOpen} className={ `flex flex-col h-5 justify-between z-20 ${hideOpenIcon}`}>
            <span className={hamburgar}></span>
            <span className={hamburgar}></span>
            <span className={hamburgar}></span>
          </button>

          <button onClick={handleClickClose} className={ `relative flex items-center z-50 ${hideCloseIcon}`}>
            <img src={iconClose} alt="icon-close" className=" h-7" />
          </button>

          {isClicked && (
            <div>

                {/* overlay */}
                {/* <div className=" absolute inset-0 bg-black/30 h-screen w-full z-10"></div> */}

                <div className="mx-auto">
                  <div className=" absolute top-24 h-96 mx-4 px-10 text-center inset-x-0 text-white bg-[hsl(257,27%,26%)] rounded-lg z-20">
                    <div className=" flex flex-col w-full h-36 justify-between mt-10">
                      <a href="">Features</a>
                      <a href="">Pricing</a>
                      <a href="">Resources</a>
                    </div>

                    {/* horizontal line */}
                    <div className=" h-[1px] w-full bg-[hsl(0,0%,75%)]/50 my-8"></div>
                    <div className="flex flex-col w-full h-28 justify-between mb-10">
                      <a href="">Login</a>
                      <button href="" className=" my-5 font-medium bg-[hsl(180,66%,49%)] px-10 py-3 rounded-full">Sign Up</button>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
        {/* mobile menu end */}

        {/* desktop menu */}
        <div className=" hidden lg:flex lg:basis-2/3">
          <div className=" pl-4 w-80 flex justify-between font-bold">
            <a href="" className=" hover:text-[hsl(255,11%,22%)] ">Features</a>
            <a href="" className=" hover:text-[hsl(255,11%,22%)] ">Pricing</a>
            <a href="" className=" hover:text-[hsl(255,11%,22%)] ">Resources</a>
          </div>
        </div>

        <div className=" hidden lg:flex lg:justify-end lg:items-center font-bold">
          <a href="" className=" hover:text-[hsl(255,11%,22%)] ">Login</a>
          <button href="" className="ml-10 text-white bg-[hsl(180,66%,49%)] px-5 py-3 rounded-full hover:bg-[hsl(180,66%,49%)]/50">Sign Up</button>
        </div>
        {/* desktop menu end */}
      </nav>

      <div className="relative h-[23rem] lg:h-0 lg:top-10">
        <div className="absolute my-5 left-1 -right-36 lg:left-[60%] lg:w-full">
          <img src={illustrationWorking} alt="illustration-working" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:relative lg:top-32">
        <h1 className=" font-bold text-[hsl(255,11%,22%)] text-[2.5rem] my-5 leading-tight lg:text-[5rem]">
          More than just <br /> shorter links
        </h1>
        <p className=" lg:hidden">
          Build your brand's recognition and <br /> get detailed insights on how your <br />
          links are performing.
        </p>
        <p className=" hidden lg:block lg:text-2xl">
          Build your brand's recognition and get detailed <br /> insights on how your
          links are performing.
        </p>
        <button className="my-5 text-white text-2xl font-medium bg-[hsl(180,66%,49%)] px-12 py-3 rounded-full hover:bg-[hsl(180,66%,49%)]/50 lg:mt-10">Get Started</button>
      </div>
    </div>
  );
}
