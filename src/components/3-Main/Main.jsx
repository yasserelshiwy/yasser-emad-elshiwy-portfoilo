import { useState } from "react";
import { myProjects } from "./myProjects";

import { AnimatePresence, motion } from "motion/react";
export default function Main() {
  const [activeButon, setActiveButon] = useState("all");
  const [projects, setProjects] = useState(myProjects);
  const [showMore, setShowMore] = useState("line-clamp-3");

  function handelShowMore() {
    if (showMore === "line-clamp-3") {
      setShowMore("line-clamp-6");
    } else {
      setShowMore("line-clamp-3");
    }
  }

  const filrerProjects = (category) => {
    setActiveButon(category);
    const newAray = myProjects.filter((items) => {
      const newCateg = items.Category.find((cate) => {
        return cate === category;
      });
      return newCateg === category;
    });
    setProjects(newAray);
  };
  return (
    <>
      <main
        id="projects"
        className="flex border-y dark:border-gray-600 flex-col md:flex-row items-start gap-8 py-6"
      >
        <section className="  flex flex-row md:flex-col justify-center space-y-3  w-full flex-wrap md:w-[18%]">
          <button
            onClick={() => {
              setActiveButon("all");
              setProjects(myProjects);
            }}
            className={
              activeButon === "all"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[11px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[11px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            All Projects
          </button>
          <button
            onClick={() => {
              filrerProjects("css");
            }}
            className={
              activeButon === "css"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            Html & Css
          </button>
          <button
            onClick={() => {
              filrerProjects("BootStrap");
            }}
            className={
              activeButon === "BootStrap"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            {" "}
            BootStrap
          </button>
          <button
            onClick={() => {
              filrerProjects("JavaScript");
            }}
            className={
              activeButon === "JavaScript"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              filrerProjects("Tailwind");
            }}
            className={
              activeButon === "Tailwind"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            Tailwind
          </button>
          <button
            onClick={() => {
              filrerProjects("React");
            }}
            className={
              activeButon === "React"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            {" "}
            React.js
          </button>
          <button
            onClick={() => {
              filrerProjects("Next");
            }}
            className={
              activeButon === "Next"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            {" "}
            Next.js
          </button>
          <button
            onClick={() => {
              filrerProjects("MUI");
            }}
            className={
              activeButon === "MUI"
                ? " active py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold  hover:opacity-100 md:text-[16px] "
                : " py-2  px-4 ml-2 bg-[#fafafa] dark:bg-[#252529] text-black dark:text-gray-300 rounded-sm text-[9px] sm:text-[11px] cursor-pointer opacity-60 transition-all duration-300 hover:font-bold hover:opacity-100 md:text-[16px] "
            }
          >
            {" "}
            MaterialUI
          </button>

          <div />
        </section>
        <section className="  w-[100%] md:w-[82%] flex  justify-center  flex-wrap  gap-6  lg-px-4 ">
          <AnimatePresence>
            {projects.map((item) => {
              return (
                <>
                  <motion.article
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 10, stiffness: 50 }}
                    key={item.id}
                    className="card border border-blue-100 dark:border-gray-600 hover:scale-[1.02] hover:rotate-1 hover:border-blue-300 transition-all duration-300 shadow-sm shadow-gray-300 dark:shadow-gray-600 w-full overflow-hidden space-y-1 rounded-lg sm:w-[47%] xl:w-[30%] bg-[#fafafa] text-black dark:text-gray-300 dark:bg-[#252529] "
                  >
                    <img src={item.image} alt="" className="h-40  w-full" />
                    <div className="body-card  space-y-4 p-4">
                      <h2 className="title font-bold text-xl text-black dark:text-white">
                        {item.titel}
                      </h2>
                      <p
                        className={` ${showMore}  discription text-[14px] text-gray-800 dark:text-gray-400`}
                      >
                        {item.discription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-lg">
                          <a
                            href={item.liveDemo}
                            target="_blank"
                            className="hover:scale-110 text-lg transition-all duration-300"
                          >
                            <i className="fa-solid fa-link "></i>
                          </a>
                          <a
                            href={item.gitHubLink}
                            target="_blank"
                            className="hover:scale-110 text-lg  transition-all duration-300"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </div>
                        <button
                          onClick={() => {
                            handelShowMore();
                          }}
                          className=" cursor-pointerflex items-center gap-2 text-blue-400 hover:scale-105  transition-all duration-300"
                        >
                          <span> More</span>{" "}
                          <i className="fa-solid fa-right-long mt-1"></i>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                </>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}
