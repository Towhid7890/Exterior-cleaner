/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import logo from "../../assets/kilted.png.png";
import border from "../../assets/div.tp-bdr-pttrn-blk-acc.png";
import icon1 from "../../assets/icon8.png";
import icon2 from "../../assets/icon9.png";
const Experience = () => {
  return (
    <div className="w-[75%] mx-auto py-10 flex">
      <div>
        <img className="w-[280px]" src={logo} alt="" />
      </div>
      <div>
        <div className="flex items-center ">
          <p className="text-green-500">Get Started</p>
          <img className=" h-2 ml-[-200px]" src={border} alt="" />
        </div>
        <div>
          <h1 className="text-primary text-3xl font-bold">
            Experience the MVP Difference: How It Works
          </h1>
          <div className="flex items-center gap-5 mt-5 ">
            <img src={icon1} className="w-[50px] h-[50px]" alt="" />
            <div>
              <p className="text-md text-green-500">Request a Quote</p>

              <p className="text-sm">
                Start by contacting us to request a quote for our exterior
                cleaning services. We'll provide you with a detailed estimate of
                the services you need and the associated costs.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 ">
            <img src={icon2} className="w-[50px] h-[50px]" alt="" />
            <div>
              <p className="text-md text-green-500 ">Schedule a Service</p>

              <p className="text-sm">
                Once you've accepted the quote, we'll work with you to schedule
                a convenient time for the cleaning service to take place. We're
                flexible and can work around your schedule to ensure minimal
                disruption to your day.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 ">
            <img src={icon2} className="w-[50px] h-[50px]" alt="" />
            <div>
              <p className="text-md text-green-500 ">Exterior Cleaning</p>

              <p className="text-sm">
                On the day of the service, our team of experts will arrive at
                your property on time and in uniform. We'll use our
                state-of-the-art equipment and eco-friendly cleaning solutions
                to clean your windows, gutters, siding, roof, or other surfaces
                as needed. We pay attention to the details and tackle those
                hard-to-reach spots to ensure that your property looks its best.
              </p>
            </div>
          </div>
        </div>
        <button className="px-10 mt-10 py-2 border border-primary bg-secondary text-primary font-bold rounded-3xl">
          Schedule estimate
        </button>
      </div>
    </div>
  );
};

export default Experience;
