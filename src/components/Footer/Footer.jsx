import logo from "../../assets/NEWLOGO-ai (4) 1.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import snake from "../../assets/snake.png";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-info text-base-content">
        <div className="justify-center flex flex-col">
          <span className="">
            <img src={logo} className="h-[100px] w-[100px]" alt="" />
          </span>
          <div className="grid mt-[-20px] grid-flow-col gap-4 text-white">
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
        <div className="text-white flex gap-20 justify-center">
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <div className="lg:ml-5 flex flex-col text-white justify-center">
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
        <div>
          <p>© 2023 All Rights Reserved.</p>
          <div className="flex gap-3">
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </div>
        <div className="text-center px-10">
          <p>
            At MVP Exterior Cleaning, we believe in providing exceptional
            service to all members of the public, regardless of race, gender, or
            sexual orientation. We welcome and value diversity in all its forms
            and are committed to treating every client with respect and
            professionalism.
          </p>
        </div>
        <div>
          <img src={snake} alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
