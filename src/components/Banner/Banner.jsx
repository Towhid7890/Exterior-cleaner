import backPic from "../../assets/corporate-mainstage.jpg.png"
import "./banner.css"
const Banner = () => {
    return (
        <div className="hero banner" style={{ backgroundImage: `url(${backPic})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="">
    <div className="w-[25%]"></div>
    <div className="w-3/4">
      <h1 className="text-5xl font-bold text-white">Cleaner Windows,</h1>
      <h1 className="text-5xl font-bold text-white">Better View.</h1>
      <p className="py-6">Trust the Pros for a Sparkling Exterior Clean.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
      </div>
    );
};

export default Banner;