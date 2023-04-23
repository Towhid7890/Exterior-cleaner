/* eslint-disable react/no-unescaped-entities */
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import Divider from "./../Divider/Divider";

const Work = () => {
  return (
    <div className="mt-12 py-5">
      <Divider>Our work</Divider>

      <h2 className="text-3xl text-primary font-bold text-center">
        MVP Exterior Cleaning's Commitment to Excellence
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto gap-1 mt-16">
        <div className="w-full">
          <img className=" h-[380px]" src={pic1} alt="" />
        </div>
        <div className="w-full">
          <img className=" h-[380px]" src={pic2} alt="" />
        </div>
        <div className="w-full">
          <img className=" h-[380px] ps-2" src={pic3} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full h-[380px]" src={pic4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
