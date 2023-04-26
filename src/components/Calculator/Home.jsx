import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Home = () => {
  const [step, setStep] = useState("");
  const handleStep1 = () => {
    setStep("step1");
  };
  return (
    <>
      {step == "" ? (
        <>
          <div className="text-center py-10 space-y-5">
            <h2 className="text-3xl font-bold">
              WINDOW CLEANING QUOTE CALCULATOR
            </h2>
            <p className="font-bold">
              Please note there will be a minimum charge of $150 which will
              cover up to 25 panes of glass
            </p>
            <button
              onClick={handleStep1}
              className="btn border-0 px-5 py-2 rounded-lg text-white uppercase bg-blue-500"
            >
              <FaCheck className="mr-2"></FaCheck> Get Started
            </button>
          </div>
        </>
      ) : step == "step1" ? (
        <Step1 setStep={setStep}></Step1>
      ) : step == "step2" ? (
        <Step2 setStep={setStep}></Step2>
      ) : step == "step3" ? (
        <Step3 setStep={setStep}></Step3>
      ) : step == "step4" ? (
        <Step4></Step4>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
