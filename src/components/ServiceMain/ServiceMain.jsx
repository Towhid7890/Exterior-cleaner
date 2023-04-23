import flat from "../../assets/Residential-img.jpg.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import coming from "../../assets/coming.png";
const ServiceMain = () => {
  return (
    <div className="hero">
      <div className="flex p-0 flex-col lg:flex-row-reverse">
        <div className="ml-auto right-0 w-full lg:w-[50%]">
          <img src={flat} alt="" className="w-full h-[300px] lg:h-[750px]" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-[50%] bg-accent lg:ps-16 pr-3 pt-16">
          <div className="w-full pl-5">
            <p className="text-green-500">Our Services</p>
            <p className="text-3xl font-bold text-primary">What we clean</p>
            <button className="rounded-2xl my-8 font-bold border-primary border-2 bg-secondary text-primary h-[33px]  w-[430px]">
              Residential
            </button>
            <div className="flex items-center gap-5 ">
              <div className="border shadow-lg p-3 rounded-full">
                <img src={icon1} className="h-[45px] w-[45px]" alt="" />
              </div>
              <div>
                <p className="text-md text-primary font-bold uppercase">
                  Window Cleaning
                </p>
                <p className="text-sm">
                  See the world clearly with our streak-free window cleaning
                  services.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 py-5">
              <div className="border shadow-lg p-3 rounded-full">
                <img src={icon2} className="h-[45px] w-[45px]" alt="" />
              </div>
              <div>
                <p className="text-md uppercase text-primary font-bold">
                  Gutter Cleaning
                </p>
                <p className="text-sm">
                  Protect your home from water damage with our reliable gutter
                  cleaning services.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 py-5">
              <div className="border shadow-lg p-3 rounded-full">
                <img src={icon3} className="h-[45px] w-[45px]" alt="" />
              </div>
              <div>
                <p className="text-md text-primary font-bold">House Washing</p>
                <p className="text-sm">
                  Bring your home back to life with our gentle yet effective
                  house washing methods.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 ">
              <div className="border shadow-lg p-3 rounded-full">
                <img src={icon4} className="h-[45px] w-[45px]" alt="" />
              </div>
              <div>
                <p className="text-md text-primary font-bold">
                  Pressure Washing
                </p>
                <p className="text-sm">
                  Say goodbye to dirt and grime with our professional pressure
                  washing services.
                </p>
              </div>
            </div>
            <div>
              <img
                className="w-[110px] mt-[-116px] ml-[-80px]"
                src={coming}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
