import React from "react";

export default function Form() {
  return (
    <>
      <div className=" relative -top-20 flex flex-col justify-center items-center bg-[hsl(257,27%,26%)] rounded-lg">
        <form action="" className=" flex flex-col justify-between items-center bg-form-bg-mobile bg-right-top bg-no-repeat w-full h-44 p-8 rounded-lg">
            <input 
                type="text" 
                placeholder="Shorten a link here..." 
                className=" mb-2 h-20 w-full rounded-lg pl-5"
            />
            <button className=" text-white bg-[hsl(180,66%,49%)] h-20 w-full rounded-lg mt-2">Shorten It!</button>
        </form>
      </div>
    </>
  );
}
