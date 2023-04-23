/* eslint-disable react/no-unescaped-entities */
import people from "../../assets/removal 1.png"
import heading from "../../assets/div.anm_hlf-dnx2.png"
import icon1 from "../../assets/icon5.png"
import icon2 from "../../assets/icon6.png"
import icon3 from "../../assets/icon7.png"
const WhyUs = () => {
    return (
      <>
      <div className="py-5">
        <img src={heading} alt="" />
      </div>
      <div className="hero ">
          <div className="flex flex-col lg:flex-row">
            <img  src={people} className="w-[700px]" />
            <div className="lg:pr-3">
              <p>Why Us</p>
              <h1 className="text-3xl font-bold text-primary">Our Unique Edge at MVP Exterior Cleaning</h1>
              <div className="flex items-center gap-5 mt-5 ">
           <img src={icon1} className="w-[60px] h-[60px]" alt="" />
            <div>
                <p className="text-md text-primary font-bold">Attention to Detail:</p>
                <p className="text-sm">At MVP Exterior Cleaning, we take pride in our meticulous attention to detail. We don't just clean your property, we go above and beyond to ensure that every nook and cranny is spotless. From the corners of your windows to the hard-to-reach areas of your roof, we make sure that every inch of your property is clean and well-maintained.</p>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 ">
           <img src={icon2} className="w-[60px] h-[60px]" alt="" />
            <div>
                <p className="text-md font-bold">Professionalism:</p>
                <p className="text-sm">Our team of highly trained professionals is committed to providing exceptional service to every client. We arrive on time, in uniform, and with all the tools and equipment needed to get the job done right. We communicate clearly and effectively with our clients throughout the entire process, ensuring that you are always informed and satisfied with our services.</p>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 ">
           <img src={icon3} className="w-[60px] h-[60px]" alt="" />
            <div>
                <p className="text-md  font-bold">Eco-Friendly:</p>
                <p className="text-sm">At MVP Exterior Cleaning, we believe in being responsible stewards of the environment. That's why we use only eco-friendly cleaning products and methods that are safe for your property and the planet. Our cleaning solutions are free of harsh chemicals and toxins, and our equipment is designed to minimize water waste. When you choose MVP Exterior Cleaning, you can feel good knowing that you're making a positive impact on the environment.</p>
            </div>
        </div>
            </div>
          </div>
        </div></>
    );
};

export default WhyUs;