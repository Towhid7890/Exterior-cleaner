/* eslint-disable react/no-unescaped-entities */
import service from "../../assets/service.png";
const Services = () => {
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse w-[75%] gap-5">
        <div className="text-left lg:text-left ps-3">
          <h1 className="text-3xl font-bold text-green-500">
            Exceptional Exterior Cleaning Services
          </h1>
          <p className="py-6 text-xl text-primary">
            Experience the Best in Exterior Cleaning with MVP Exterior Cleaning
          </p>
          <p>
            At MVP Exterior Cleaning, we go above and beyond to provide
            exceptional exterior cleaning services that exceed our clients'
            expectations. From windows to gutters, and house washing to pressure
            washing, our team of experts uses state-of-the-art equipment and
            eco-friendly cleaning products to get the job done right. We don't
            just clean the surface, we pay attention to the details and tackle
            those hard-to-reach spots to ensure your property looks its best.
            Our commitment to safety and customer satisfaction means that you
            can trust us to take care of your property as if it were our own.
            Discover the MVP difference and experience the best in exterior
            cleaning services with us today.
          </p>
          <button className="px-10 mt-20 py-2 border border-primary bg-secondary text-primary font-bold rounded-3xl">
            Schedule estimate
          </button>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <img className="rounded-t-xl" src={service} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
