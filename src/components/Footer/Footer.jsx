import logo from "../../assets/NEWLOGO-ai (4) 1.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import snake from "../../assets/snake.png";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-info text-base-content">
        <div className="w-[50%] mx-auto flex flex-col justify-center">
          <div className="w-full">
            <span className="">
              <img src={logo} className="h-[100px] w-[100px]" alt="" />
            </span>
            <div className="grid  grid-flow-col gap-4 text-white">
              <a className="link link-hover">
                <FaLinkedinIn className="text-xl"></FaLinkedinIn>
              </a>
              <a className="link link-hover">
                <FaInstagram className="text-xl"></FaInstagram>
              </a>
              <a className="link link-hover">
                <FaTwitter className="text-xl"></FaTwitter>
              </a>
              <a className="link link-hover">
                <FaFacebook className="text-xl"></FaFacebook>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`text-white w-full flex gap-20 justify-center ${styles.footerMiddle}`}
        >
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div className="flex justify-center mt-[-20px] lg:mt-0 w-full">
          <div className="lg:ml-5 flex flex-col text-white ">
            <button className="bg-secondary text-primary rounded-xl font-md px-6 py-1 border-primary">
              Schedule estimate
            </button>
            <div className="flex mt-4 items-center gap-1">
              <FaPhoneAlt></FaPhoneAlt>
              <p className="text-center">(403) 829-0473</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer p-10 bg-black text-white">
        <div className="w-full lg:w-full">
          <p>© 2023 All Rights Reserved.</p>
          <div className="flex  flex-col lg:flex-row gap-2">
            <a className="link  link-hover">
              <small className="">Site Map</small>
            </a>
            <a className="link link-hover">
              <small>Accessibility</small>
            </a>
            <a className="link link-hover">
              <small>Privacy Policy</small>
            </a>
            <a className="link link-hover">
              <small>Canada Privacy Policy</small>
            </a>
            <a className="link link-hover">
              <small>Site Search</small>
            </a>
          </div>
        </div>

        <div className="lg:text-center lg:px-10">
          <small className="">
            At MVP Exterior Cleaning, we believe in providing exceptional
            service to all members of the public, regardless of race, gender, or
            sexual orientation. We welcome and value diversity in all its forms
            and are committed to treating every client with respect and
            professionalism.
          </small>
        </div>
        <div className="w-full justify-center">
          <img className="w-[160px] lg:w-[100px]" src={snake} alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
