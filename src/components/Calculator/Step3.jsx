/* eslint-disable react/prop-types */
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import door1 from "../../assets/step1.png";
import door2 from "../../assets/step2.png";
import door3 from "../../assets/step3.png";
const Step3 = ({ setStep }) => {
  const handleStep4 = () => {
    setStep("step4");
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-gray-600">
        What Other Services Would You Like?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="w-full flex justify-center">
          <div className="tooltip">
            <img className="h-[150px]" src={door1} alt="" />
            <small className="tooltiptext">Skylight Cleaning</small>
            <small>Skylight Cleaning</small>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="tooltip">
            <img className="h-[150px]" src={door2} alt="" />
            <small className="tooltiptext">
              Select Number of Individual Tracks(1)
            </small>
            <small>Track Deep Cleaning</small>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="tooltip">
            <img className="h-[150px]" src={door3} alt="" />
            <small className="tooltiptext">
              Select Number of Individual Railing Panels
            </small>
            <small>Railing Glass</small>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button
          onClick={handleStep4}
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

export default Step3;
