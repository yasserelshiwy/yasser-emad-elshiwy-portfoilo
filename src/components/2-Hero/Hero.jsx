import profile from "../../assts/img/yasser-modified.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import Lottie from "lottie-react";
import lap from "../../../public/anmition/laptop.json";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      <section className="hero flex  items-center pt-14 px-0 md:px-16 ">
        <div className="grow  ">
          <div className=" relative min-h-32">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 20 }}
              src={profile}
              className="w-32 border-2 border-gray-300 shadow-xs shadow-gray-300 dark:border-[#fff7ed7e] rounded-full"
              alt=""
            />
            <div className="text-blue-500 text-right  absolute left-[114px] bottom-1 ">
              <VerifiedIcon />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-10  mb-5 text-3xl md:text-4xl font-bold text-black dark:text-white"
          >
            Front-End Web Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-lg Caveat-font  tracking-wider  text-gray-600 dark:text-gray-300"
          >
            <p>Hi !</p>
            I’m <span className="text-red-400">Yasser Emad Elshiwy</span> ,
            Front-End Web Developer , transforming ideas into{" "}
            <span className="text-red-400 ">Digital Reality</span>
          </motion.p>
          <div className="flex items-center gap-5 my-5 text-2xl dark:text-gray-300 ">
            <a
              href="https://api.whatsapp.com/send/?phone=2001275962106&text=Welcome+to+Yasser+El-shiwy%2C+front-end+developer&type=phone_number&app_absent=0"
              target="_blank"
              className="hover:text-green-600 hover:scale-125 transition-all duration-200"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.facebook.com/elshiwwy"
              target="_blank"
              className="hover:scale-125 hover:text-blue-600 transition-all duration-200"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/elshiwy_x/"
              target="_blank"
              className="hover:scale-125 hover:text-[#FF7B00] transition-all duration-200"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/yasserelshiwy"
              target="_blank"
              className="hover:scale-125  transition-all duration-200"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yasser-elshiwy-7a1415326/"
              target="_blank"
              className="hover:scale-125 hover:text-[#0A66C2] transition-all duration-200"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className=" hidden xl:block">
          <Lottie className=" h-[410px] " animationData={lap} />
        </div>
      </section>
    </>
  );
}
