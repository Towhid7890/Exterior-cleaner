/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import door1 from "../../assets/door.png";
import door2 from "../../assets/door1.png";
import door3 from "../../assets/door2.png";
import "./calculator.css";
import Shared from "./Shared";
// import { useState } from "react";
// import { Link } from "react-router-dom";
const Step1 = ({ setStep }) => {
  const handleStep2 = () => {
    setStep("step2");
  };
  return (
    <>
      <div>
        <Shared></Shared>
        <div>
          <div className="py-12">
            <h1 className="text-5xl font-bold text-center text-gray-600 font-inherit">
              Window Cleaning Options
            </h1>
            <p className="text-center">
              Looking for Interior, Exterior or Both?
            </p>
          </div>
          <p className="text-center text-warning font-bold">
            <i>
              *Click on an image to select your choice, then use the scroll bar
              above the image after selection is made to choose the number of
              panes
            </i>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="w-full flex justify-center">
            <div className="tooltip">
              <img className="h-[150px]" src={door1} alt="" />
              <small className="tooltiptext">
                Select Number of Individual windows Panels
              </small>
              <small>Exterior Window Cleaning</small>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="tooltip">
              <img className="h-[150px]" src={door2} alt="" />
              <small className="tooltiptext">
                Select Number of Individual windows Panels(1)
              </small>
              <small>Interior Window Cleaning</small>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="tooltip">
              <img className="h-[150px]" src={door3} alt="" />
              <small className="tooltiptext">
                Select Number of Individual windows Panels
              </small>
              <small>Interior & Exterior Window Cleaning</small>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <button
            onClick={handleStep2}
            className=" btn border-0 px-5 rounded-lg text-white uppercase bg-blue-500"
          >
            <FaCheck className="mr-2"></FaCheck> Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default Step1;
