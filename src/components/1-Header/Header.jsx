import { useEffect, useState } from "react";
export default function Header() {
  const [showModul, setShowModul] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("dark");
    if (stored !== null) {
      return JSON.parse(stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      localStorage.setItem("dark", JSON.stringify(prefersDark));
      return prefersDark;
    }
  });

  function handelDarkMode() {
    if (dark) {
      localStorage.setItem("dark", "false");
      setDark(false);
      document.documentElement.classList.remove("dark");
      setIconMood("fa-moon");
      setIconMoodColoer("text-gray-600 ");
    } else {
      localStorage.setItem("dark", "true");
      setDark(true);
      document.documentElement.classList.add("dark");
      setIconMoodColoer("text-gray-400 ");
      setIconMood("fa-sun");
    }
  }
  const [iconMood, setIconMood] = useState("fa-moon");
  const [iconMoodColor, setIconMoodColoer] = useState("text-gray-600");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      setIconMood("fa-sun");
      setIconMoodColoer("text-gray-400");
    } else {
      document.documentElement.classList.remove("dark");
      setIconMood("fa-moon");
      setIconMoodColoer("text-gray-600");
    }
  }, [dark]);
  return (
    <>
      <header
        id="About"
        className="flex  gap-4 items-center  justify-between py-4 "
      >
        <nav className=" md:grow flex justify-center ">
          <button
            onClick={() => {
              setShowModul(true);
              setShowNav(false);
            }}
            className="md:hidden text-gray-700  dark:text-white text-xl  bg-[#fafafa]  dark:bg-[#252529] rounded-full h-10 w-10 border-[1px] transition-all duration-200 dark:border-[#4a5565a6] border-gray-200  hover:border-gray-400 dark:hover:border-[#fff7ed54]"
          >
            <i className="fa-solid fa-bars font-medium text-gray-600 dark:text-gray-400"></i>
          </button>
          {showNav && (
            <ul className=" hidden  md:flex justify-center items-center gap-4 w-fit shadow dark:shadow-[1px_1px_40px_#6e686821] bg-[#fafafa] dark:bg-[#252529] py-3 px-5 rounded-3xl   text-sm font-medium ">
              <li className=" relative transition-all duration-200 group hover:-translate-y-0.5 ">
                <a
                  href="#About"
                  className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold  transition-all duration-300  group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  About
                </a>
              </li>

              <li className=" relative transition-all duration-200 group hover:-translate-y-0.5 ">
                <a
                  href="#projects"
                  className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold  transition-all duration-300  group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  Projects
                </a>
              </li>
              <li className=" relative transition-all duration-200 group hover:-translate-y-0.5 ">
                <a
                  href="#Skills"
                  className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold transition-all duration-300   group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  Skills
                </a>
              </li>
              <li className=" relative transition-all duration-200 group hover:-translate-y-0.5 ">
                <a
                  href="#contant"
                  className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold  transition-all duration-300  group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
        {showModul && (
          <div
            onClick={() => {
              setShowModul(false);
              setShowNav(true);
            }}
            className="nav-model-bg fixed top-0 bottom-0 left-0 right-0    backdrop-blur-[2px] z-50"
          >
            <div className="nav-modul ml-auto mr-auto w-[75%]  mt-10 px-8 py-4 rounded-2xl  dark:shadow-[1px_1px_40px_#6e686821] bg-[#fafafa] dark:bg-[#18181b] shadow-xl  ">
              <div className="flex justify-between items-center pb-2 text-gray-700 dark:text-gray-400 pt-3">
                <h3 className="text-sm ">Navigation</h3>
                <button
                  onClick={() => {
                    setShowModul(false);
                    setShowNav(true);
                  }}
                  className=" cursor-pointer group hover:rotate-180  duration-700 font-medium   transition-all "
                >
                  <i className="fa-solid fa-x group-hover:text-red-600  duration-300    transition-colors "></i>
                </button>
              </div>
              <ul>
                <li className=" relative transition-all duration-200 hover:translate-y-0.5 pb-3 pt-2 group  border-b-[1px]  border-[#232326] mb-1">
                  <a
                    href="#up"
                    className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold  transition-all duration-300 text-lg   group-hover:text-blue-600 dark:group-hover:text-blue-400 "
                  >
                    About
                  </a>
                </li>

                <li className=" relative transition-all duration-200 hover:-translate-y-0.5 pb-3 pt-2 group border-b-[1px]  border-[#232326] mb-1 ">
                  <a
                    href="#projects"
                    className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold  transition-all duration-300 text-lg  group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    Projects
                  </a>
                </li>
                <li className=" relative transition-all duration-200 hover:-translate-y-0.5 pb-3 pt-2 group  border-b-[1px]  border-[#232326] mb-1">
                  <a
                    href="#Skills"
                    className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold transition-all duration-300 text-lg   group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    Skills
                  </a>
                </li>
                <li className=" relative transition-all duration-200 hover:-translate-y-0.5 pb-1 pt-2 group   mb-1">
                  <a
                    href="#contant"
                    className="text-gray-900 font-bold dark:font-medium dark:text-white opacity-90 group-hover:font-bold  transition-all duration-300 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        <button
          onClick={handelDarkMode}
          className="text-gray-700  cursor-pointer dark:text-white text-xl  bg-[#fafafa] dark:bg-[#252529] rounded-full h-10 w-10 border-[1px] transition-all duration-200 dark:border-[#4a5565a6] border-gray-200  hover:border-gray-400 dark:hover:border-[#fff7ed54]"
        >
          <i className={`fa-regular    ${iconMoodColor}  ${iconMood}`}></i>
        </button>
      </header>
    </>
  );
}
