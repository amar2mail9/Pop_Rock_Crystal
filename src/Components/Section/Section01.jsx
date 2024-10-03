import React, { useState } from "react";
import "./Section.css";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Section01() {
  const [show, setShow] = useState(false);
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Help", path: "/help" },
  ];

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <div className="bgAdd h-screen ">
      <header>
        <nav className="w-10/12 mx-auto py-4 flex justify-between items-center  ">
          <div className="flex items-center text-white font-semibold text-xl">
            <Link to="/">
              <button className="border w-8 h-14 rounded-full text-white">
                <i className="ri-vip-diamond-line"></i>
              </button>
            </Link>
            <span className="ml-2">Pop Rock Crystal</span>
          </div>
          <div className="flex  md:gap-24">
            <div className="md:flex gap-4 items-center  text-white font-semibold text-lg hidden">
              {menu.map((item, index) => (
                <NavLink key={index} to={item.path}>
                  {item.name}
                </NavLink>
              ))}

              <button className="text-white flex items-center gap-3 p-2">
                <span className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center scale-75">
                  00
                </span>
                <i className="ri-shopping-basket-fill text-4xl"></i>
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden bg-white w-10 h-10 hover:bg-sky-500 hover:shadow-md hover:text-white hover:shadow-sky-500 text-sky-600 font-extrabold  rounded-md text-xl "
            >
              {show ? (
                <i className="ri-close-large-line"></i>
              ) : (
                <i className="ri-more-2-fill"></i>
              )}
            </button>
          </div>
        </nav>

        {show && (
          <div className="inset md:hidden bg-white w-full animate__animated  animate__fadeInBottomRight ">
            <ul className="flex flex-col gap-2  ">
              {menu.map((items, index) => {
                return (
                  <Link
                    key={index}
                    to={items.path}
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="  text-xl py-1 px-4 hover:bg-sky-500"
                  >
                    <li>{items.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      <div className=" w-10/12 mx-auto  gap-2 md:mt-20 mt-4 items-start grid grid-cols-1 md:grid-cols-2 ">
        <div className="ml-12 text-white md:mt-16 flex flex-col md:items-start items-center">
          <h1 className="md:text-3xl text-xl font-semibold text-white ">
            Welcome to
          </h1>
          <h2 className="md:text-5xl text-2xl mt-2">Pop Rock Crystal Shop!</h2>
          <p className="text-slate-700 md:text-md md:mt-5 flex flex-col md:items-start items-center">
            <span>Here you will find unique phone accessories, crystals,</span>
            <span>jewelry and more. Free shipping inside the U.S. and our</span>
            <span>phone grips come with a limited warranty. Enjoy!</span>
          </p>
          <div className="flex gap-3 my-4">
            <button className="md:px-5 px-2 py-1  hover:scale-110 rounded-md font-semibold md:py-2 bg-white text-sky-600">
              Buy Now
            </button>
            <button>About Us</button>
          </div>
        </div>
        <div>
          <div className="bg-white  shadow-md shadow-slate-500 md:w-[420px] md:ml-24 rounded-md  relative">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex justify-center  items-center flex-col">
                  <img
                    src="./img/p.jpg"
                    alt=""
                    className="md:w-[300px] w-[150px] mix-blend-screen "
                  />
                  <div>
                    <h1 className="md:text-xl text-md text-slate-700 mb-10">
                      Crystal Agate Phone Grip
                      <sapn className="text-green-600">18.99$</sapn>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center  items-center flex-col">
                  <img
                    src="./img/p.jpg"
                    alt=""
                    className="md:w-[300px] w-[150px] mix-blend-screen "
                  />
                  <div>
                    <h1 className="md:text-xl text-md text-slate-700 mb-10">
                      Crystal Agate Phone Grip -{" "}
                      <sapn className="text-green-600">18.99$</sapn>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center  items-center flex-col">
                  <img
                    src="./img/p.jpg"
                    alt=""
                    className="md:w-[300px] w-[150px] mix-blend-screen "
                  />
                  <div>
                    <h1 className="md:text-xl text-md text-slate-700 mb-10">
                      Crystal Agate Phone Grip -{" "}
                      <sapn className="text-green-600">18.99$</sapn>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center  items-center flex-col">
                  <img
                    src="./img/p.jpg"
                    alt=""
                    className="md:w-[300px] w-[150px] mix-blend-screen "
                  />
                  <div>
                    <h1 className="md:text-xl text-md text-slate-700 mb-10">
                      Crystal Agate Phone Grip -{" "}
                      <sapn className="text-green-600">18.99$</sapn>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              style={{
                zIndex: 1,
              }}
              className="absolute top-8 left-0 bg-purple-700  py-2 px-4 rounded-r-md text-white font-semibold "
            >
              <label className="">New Hot</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section01;
