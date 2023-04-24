/* eslint-disable react/no-unescaped-entities */
import border from "../../assets/div.tp-bdr-pttrn-blk-acc.png";
const Mission = () => {
  return (
    <div className="py-10">
      <div className="mt-5">
        <img src={border} alt="" />
      </div>
      <div className="text-center text-primary text-md lg:text-lg mt-5 mx-2">
        <p className="w-full lg:w-[40%] mx-auto">
          Our mission at MVP Exterior Cleaning is to deliver exceptional,
          reliable, and customer-focused exterior cleaning services that exceed
          our clients' expectations.
        </p>
      </div>
      <div className="text-center text-green-500 text-md lg:text-lg py-5 mx-2">
        <p className="w-full lg:w-[40%] mx-auto">
          We are dedicated to enhancing the beauty and value of your property
          while providing a seamless and stress-free experience.
        </p>
      </div>
    </div>
  );
};

export default Mission;
