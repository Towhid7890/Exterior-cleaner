import backPic from "../../assets/corporate-mainstage.jpg.png";
import "./banner.css";
import flag from "../../assets/flag.png";
const Banner = () => {
  return (
    <div className="hero banner" style={{ backgroundImage: `url(${backPic})` }}>
      <div className="hero-overlay items-center flex bg-opacity-30">
        <div className=" w-1/2 ps-20">
          <h2 className="text-5xl text-white font-bold ">Cleaner Windows,</h2>
          <h2 className="text-5xl text-white font-bold ">Better View.</h2>

          <p className="text-xl py-4 font-medium text-white">
            Trust the Pros for a Sparkling Exterior Clean.
          </p>
          <button className="px-10 mt-10 py-2 border border-primary bg-secondary text-primary font-bold rounded-3xl">
            Schedule estimate
          </button>
        </div>
        <div className="right-0 top-40 absolute">
          <img src={flag} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
