/* eslint-disable react/prop-types */
import Shared from "./Shared";
import door1 from "../../assets/screen.png";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
const Step2 = ({ setStep }) => {
  const handleStep2 = () => {
    setStep("step3");
  };
  return (
    <div>
      <Shared></Shared>
      <div className="py-5">
        <h1 className="text-5xl font-bold text-center text-gray-600">
          Would You Like Screen Cleaning?
        </h1>
        <p className="text-center mt-3">
          Click on the icon below and then the scroll bar above to to select how
          many individual screens you would like cleaned
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div>
          <div className="tooltip">
            <img className="h-[150px]" src={door1} alt="" />
            <small className="tooltiptext">Screen Cleaning</small>
            <small>Screen Cleaning</small>
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
      <div className="flex justify-center items-center ">
        <FaArrowLeft className="mr-2"></FaArrowLeft>
        <p className="text-blue-400">Previous Step</p>
      </div>
    </div>
  );
};

export default Step2;
