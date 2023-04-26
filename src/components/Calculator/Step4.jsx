import DayCalender from "./DayCalender";
import Shared from "./Shared";

const Step4 = () => {
  return (
    <div>
      <Shared></Shared>
      <h1 className="text-5xl text-center font-bold">Your Estimate</h1>
      <div className="text-center py-8">
        <p>The final estimated price is :</p>
        <p className="text-4xl text-blue-400 mt-3">CA$150</p>
      </div>
      <p className="text-center w-full  lg:w-[65%] mx-auto">
        Please note this is only an estimate and not an exact quote, each home
        is unique, please contact us directly to discuss your project in more
        detail so that we can give you the best price.
      </p>
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col w-1/2">
          <label className="text-black font-bold" htmlFor="">
            Name*
          </label>
          <input className="input-style" type="text" />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-1/2">
            <label className="text-black font-bold py-4" htmlFor="">
              Email*
            </label>
            <input className="input-style" type="email" />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-black font-bold py-4" htmlFor="">
              Phone*
            </label>
            <input className="input-style" type="phone" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-1/2">
            <label className="text-black font-bold py-4" htmlFor="">
              Enter Promo*
            </label>
            <input className="input-style" type="text" />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-black font-bold py-4" htmlFor="">
              Zip/Postal Code*
            </label>
            <input className="input-style" type="text" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <DayCalender></DayCalender>
      </div>
    </div>
  );
};

export default Step4;
