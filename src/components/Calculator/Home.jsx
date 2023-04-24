import { FaCheck } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-center py-10 space-y-5">
      <h2 className="text-3xl font-bold">WINDOW CLEANING QUOTE CALCULATOR</h2>
      <p className="font-bold">
        Please note there will be a minimum charge of $150 which will cover up
        to 25 panes of glass
      </p>
      <button className="border-0 px-5 py-2 rounded-lg text-white uppercase bg-blue-500">
        <FaCheck className=""></FaCheck>
        Get Started
      </button>
    </div>
  );
};

export default Home;
