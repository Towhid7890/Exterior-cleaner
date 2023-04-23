import pic from "../../assets/toolkit-img-01.jpg.png";
const Quality = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-info items-center mt-32 mb-32 lg:px-52 gap-10 lg:h-[300px]">
      <div className="text-white">
        <p className="font-bold text-2xl py-5">Committed to Quality: </p>
        <small className="mb-5">
          Our team of experts uses only the best tools and equipment to <br />{" "}
          ensure that your property receives the care and attention it deserves.
        </small>
      </div>
      <div className="w-full lg:w-[450px]">
        <img src={pic} className="rounded-t-xl" alt="" />
        <div className="bg-accent text-center rounded-b-lg shadow-md p-5">
          <p className="text-primary font-bold">
            Enhancing the Beauty and <br /> Value of Your Property
          </p>
          <small>
            Trust us to take care of your property as if it were <br /> our own.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Quality;
