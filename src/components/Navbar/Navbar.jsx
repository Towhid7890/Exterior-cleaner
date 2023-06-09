import { Link } from "react-router-dom";
import logo1 from "../../assets/NEWLOGO-ai (4) 1.png";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Residential</a>
            </li>
            <li>
              <a>Why Us</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <div className="lg:ml-5 flex flex-col justify-center">
                <p className="text-center">(403) 829-0473</p>
                <button className="bg-secondary text-primary rounded-xl border-2 w-[180px] border-primary">
                  Schedule estimate
                </button>
              </div>
            </li>
          </ul>
        </div>
        <a className="normal-case flex items-center">
          <img src={logo1} alt="" className="h-[80px] w-[80px]" />
          <div className="items-center flex text-center">
            <p className="text-2xl font-bold">
              EXTERIOR <br />
              <span className="text-xl font-normal block mt-[-5px] text-red">
                CLEANING
              </span>
            </p>
          </div>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex text-black">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Residential</a>
          </li>
          <li>
            <a>Why Us</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
        <div className="lg:ml-5 flex flex-col justify-center">
          <p className="text-center">(403) 829-0473</p>
          <Link to="/calculator">
            <button className="bg-secondary text-primary rounded-xl border w-[180px] border-primary">
              Schedule estimate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
