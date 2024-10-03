import React from "react";
import "./Section.css";
import { Button } from "react-bootstrap";

const Section03 = () => {
  return (
    <div className="w-full myBgDiv h-screen ">
      <div className="w-10/12 gap-16 mx-auto grid md:grid-cols-2 grid-cols-1 md:items-center md:justify-center md:mt-24 mt-16 ">
        <div className="flex flex-col md:items-end md:justify-end items-center justify-center gap-8">
          <div className="flex flex-col gap-3 md:items-end md:justify-end mt-8 items-center  justify-center">
            <h2 className="md:text-3xl font-mono font-semibold text-slate-400 text-xl">
              BEST PRICE
            </h2>
            <h1 className="text-2xl md:text-5xl text-slate-700 font-semibold font-sans">
              Agate Phone Grip
            </h1>
          </div>
          <label>
            <del className="text-rose-500 font-semibold text-xl">44.60$</del>
            <span className="text-green-500 text-4xl font-bold">19.5$</span>
          </label>
          <div className="flex md:justify-end flex-col md:items-end">
            <p className=" text-center text-slate-500 ">
              These Pop Rock Crystal grip tops can be swapped with
            </p>
            <p className=" text-center text-slate-500">
              other tops depending on your mood, outfit, nails,
            </p>
            <p className=" text-center text-slate-500">
              phone case, holiday, etc.! Just gently squeeze the sides
            </p>
            <p className=" text-center text-slate-500">
              to remove and swap out with another color or design!
            </p>
          </div>
          <div>
            <Button className="px-4">Buy Now</Button>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] myShodow rounded-full bg-white flex p-16 items-center justify-center">
            <div className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] myShodow rounded-full flex items-center justify-center">
              <img
                src="./img/p.jpg"
                alt="Agate Phone Grip showcasing a stylish design"
                className="w-[80px] md:w-[170px]"
                // width={170}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;
