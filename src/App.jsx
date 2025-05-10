import Main from "./components/3-Main/Main";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import ContactUs from "./components/5-ContactUs/ContactUs";
import Footer from "./components/6-Footer/Footer";
import { useEffect, useState } from "react";
import Skils from "./components/4-Skils/Skils";

export default function App() {
  const [showScroll, setShowScroll] = useState("opacity-0");

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowScroll("opacity-100");
      } else {
        setShowScroll("opacity-0");
      }
    });
  }, []);
  return (
    <>
      <div className="">
        <div className="container bg-white shadow-xs px-5 sm:px-8 xl:px-10 dark:bg-[#18181B]">
          <Header />
          <Hero />
          <Main />
          <Skils />
          <ContactUs />
          <Footer />
          <button
            onClick={() => {
              scrollTop();
            }}
            className={` ${showScroll}  transition-all duration-[800ms] w-10 h-10 bg-blue-500 fixed bottom-10 hover:scale-110  right-2 md:right-10 rounded-full text-gray-200 dark:bg-gray-700`}
          >
            <i className="fa-solid fa-angle-up "></i>
          </button>
        </div>
      </div>
    </>
 );
}
