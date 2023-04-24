import backPic from "../../assets/corporate-mainstage.jpg.png";
import flag from "../../assets/flag.png";
import vector from "../../assets/vector.png";
const Banner = () => {
  return (
    <div
      className="hero lg:h-[760px]"
      style={{ backgroundImage: `url(${backPic})` }}
    >
      <div className="hero-overlay items-center flex bg-opacity-30">
        <div className="w-full lg:w-1/2 ps-10 py-20 lg:ps-20">
          <div className="">
            <h2 className="text-2xl flex lg:text-5xl text-white font-bold ">
              <img
                className="h-[45px] ml-[-60px] pr-3 hidden lg:inline"
                src={vector}
                alt=""
              />
              Cleaner Windows,
            </h2>
            <h2 className="text-2xl lg:text-5xl text-white font-bold ">
              Better View.
            </h2>

            <p className="text-md lg:text-xl lg:py-4 font-medium text-white">
              Trust the Pros for a Sparkling Exterior <br /> Clean.
            </p>
            <button className="px-5 py-1 mt-4 lg:px-10 lg:mt-10 lg:py-2 border text-sm lg:text-lg border-primary bg-secondary text-primary font-bold rounded-3xl">
              Schedule estimate
            </button>
          </div>
        </div>
        <div className="right-0 top-[130px] hidden lg:inline absolute">
          <img src={flag} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
