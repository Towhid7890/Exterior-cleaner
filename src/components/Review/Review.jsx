/* eslint-disable react/no-unescaped-entities */
import Divider from "../Divider/Divider";
import { FaGoogle } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./review.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Review = () => {
  return (
    <div className="w-[75%] mx-auto py-5">
      <Divider>Our Reviews</Divider>
      <h1 className="text-3xl text-primary font-bold text-center">
        See what our satisfied clients have to say about us!
      </h1>
      <div className="flex justify-center items-center">
        <div className="rating rating-sm">
          <small className="mr-3">5.0</small>
          <input
            type="radio"
            name="rating-1"
            className="mask  mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask  mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask  mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-400"
          />
          <FaGoogle className="text-sm ml-2"></FaGoogle>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 py-10">
          <SwiperSlide>
            <div className="text-center bg-accent rounded-xl">
              <div className="text-left px-8 py-6 h-[300px]">
                <p>
                  Sidney goes above and beyond. He's very thorough and
                  attentive. Contact was very easy. Payment was a breeze. I
                  would recommend any time. He contacts me when he's in the
                  neighborhood and is usually working at my house within the
                  hour. Great service
                </p>
              </div>
              <div className="bg-info text-white px-6 py-3 rounded-b-lg">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <p>Ken Boyko</p>
                <small>Calgary, AB</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-accent rounded-xl">
              <div className="text-left px-8 py-6 h-[300px]">
                <p>
                  Knocked on the door to ask if I needed window cleaning. Very
                  friendly, no pressure, fellow asked if he could do a walk
                  around for a quote. I thought price was reasonable and
                  included the glass front porch.
                </p>
              </div>
              <div className="bg-info text-white px-6 py-3 rounded-b-lg">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <p>Shirley Evans</p>
                <small>Calgary, AB</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-accent rounded-xl">
              <div className="text-left px-8 py-6 h-[300px]">
                <p>
                  So glad we went with MVP for our exterior windows. Sid and his
                  team were efficient and professional. Highly recommend!
                </p>
              </div>
              <div className="bg-info text-white px-6 py-3 rounded-b-lg">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <p>Amanda Moir Jones</p>
                <small>Calgary, AB</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-accent rounded-xl">
              <div className="text-left px-8 py-6 h-[300px]">
                <p>
                  Sidney goes above and beyond. He's very thorough and
                  attentive. Contact was very easy. Payment was a breeze. I
                  would recommend any time. He contacts me when he's in the
                  neighborhood and is usually working at my house within the
                  hour. Great service
                </p>
              </div>
              <div className="bg-info text-white px-6 py-3 rounded-b-lg">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <p>Ken Boyko</p>
                <small>Calgary, AB</small>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Review;
