import pic from "../../assets/toolkit-img-01.jpg.png";
const Quality = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-info items-center mt-10 lg:mt-32 lg:mb-32 lg:px-52 gap-10 lg:h-[300px]">
      <div className="text-white px-3">
        <p className="font-bold text-2xl py-5">Committed to Quality: </p>
        <small className="mb-5">
          Our team of experts uses only the best tools and equipment to ensure
          that your property receives the care and attention it deserves.
        </small>
      </div>
      <div className="w-[80%] pb-5 lg:pb-0 lg:w-[550px]">
        <img src={pic} className="rounded-t-xl" alt="" />
        <div className="bg-accent text-center rounded-b-lg shadow-md p-5">
          <p className="text-primary font-bold">
            Enhancing the Beauty and <br /> Value of Your Property
          </p>
          <small>
            Trust us to take care of your property as if it were our own.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Quality;
