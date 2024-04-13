import React from "react";
import logo from "../assets/IMAGE.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-contain flex flex-col items-center">
        <img src={logo} alt="Logo" width={"130px"} height={"130px"} className="my-10"/>
        <div className=" text-center space-y-10">
          <div>
            <h1 className="text-[64px] leading-tight">
              Beautiful screen recordings in minutes
            </h1>
            <p className="text-[24px]">
              Promo videos of your digital product as easy as taking a
              screenshot.
            </p>
          </div>
          <button className="bg-base py-3 px-5 rounded transition-all hover:scale-105 active:scale-100">
            Download Realway compass
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
