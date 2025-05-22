// @ts-nocheck
// @ts-ignore
import html from "../../assts/img/HTML5.png";
import css from "../../assts/img/CSS3.png";
import js from "../../assts/img/JavaScript.png";
import bootstrap from "../../assts/img/Bootstrap.png";
import react from "../../assts/img/React.png";
import tailwind from "../../assts/img/Tailwind CSS.png";
import next from "../../assts/img/Next.js.png";
import ts from "../../assts/img/TypeScript.png";
import "swiper/css";
import MUI from "../../assts/img/Material UI.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


export default function Skils() {
  return (
    <>
      <section
        id="Skills"
        className=" py-4 pb-8 px-4 border-b dark:border-gray-600 text-black dark:text-gray-300"
      >
        <h2 className=" mb-7 font-bold text-black dark:text-white text-2xl">
          <i className="fa-solid fa-caret-right"></i> Technical Skills
        </h2>
        <Swiper
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 5 },
            640: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
        
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            
            modules={[Autoplay ]}
          loop={true}
          keyboard={{ enabled: true }}
          className=""
        >
          {/* <SwiperNavButton /> */}
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center justify-center gap-1  hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={html} className="w-9" alt="" />
              <p>Html</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={css} className="w-9" alt="" />
              <p>css</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={bootstrap} className="w-9" alt="" />
              <p>Bootstrap </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={js} className="w-9" alt="" />
              <p>Java script</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={tailwind} className="w-9" alt="" />
              <p>Tailwind</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={react} className="w-9" alt="" />
              <p>Reactjs</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100 ">
              <img
                src={next}
                className="w-9 border-2 rounded-full bg-gray-100"
                alt=""
              />
              <p>Nextjs</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100">
              <img src={ts} className="w-9" alt="" />
              <p>typescript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition-all duration-300 opacity-85 hover:opacity-100 ">
              <img src={MUI} className="w-9" alt="" />
              <p>MUI</p>
            </div>
          </SwiperSlide>
        </Swiper>
        
      </section>
    </>
  );
}
