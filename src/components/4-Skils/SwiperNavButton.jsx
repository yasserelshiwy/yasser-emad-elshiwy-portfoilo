import { useSwiper } from "swiper/react";

export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center items-center  w-full gap-4 mt-2">
      <button
        className=" w-6 h-6 rounded-full border border-blue-200 mt-2  flex justify-center items-center  bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-primay-700 dark:hover:text-white dark:border-gray-700   text-gray-500 hover:bg-primay-300 hover:text-white hover:scale-105 transition-all "
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <i className="fa-solid fa-angle-left text-blue-400 dark:text-gray-400  text-md"></i>
      </button>
      <button
        className=" w-6 h-6 rounded-full border border-blue-200 mt-2  flex justify-center items-center  bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-primay-700 dark:hover:text-white dark:border-gray-700   text-gray-500 hover:bg-primay-300 hover:text-white hover:scale-105 transition-all "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <i className="fa-solid fa-angle-right text-blue-400 dark:text-gray-400 text-md"></i>
      </button>
    </div>
  );
};
