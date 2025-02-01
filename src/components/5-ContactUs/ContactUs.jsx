import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../../public/anmition/done.json";
import email1 from "../../../public/anmition/email1.json";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mnnjpdzl");

  return (
    <>
      <section id="contant" className="py-6">
        <div className="px-3">
          <h2 className=" text-3xl mb-4 font-bold ">
            <i className="fa-solid fa-envelope text-gray-700 dark:text-gray-300"></i>{" "}
            <span className="dark:text-gray-100">Contact Us</span>
          </h2>
          <p className="tracking-wider text-gray-800 dark:text-gray-300 ">
            Contact us for more information and get notified when i publish
            something new
          </p>
          <p className="ml-1 mt-4 text-gray-800  dark:text-gray-300">
            <i className="fa-regular fa-bell"></i> Send me what you want and I
            will get it
          </p>
        </div>
        <div className="py-8 md:py-0 flex justify-between items-center">
          <div className=" w-full md:w-[65%]">
            <form
              action=""
              className="space-y-8 md:space-y-12  ml-4 "
              onSubmit={handleSubmit}
            >
              <div className="flex  flex-col  md:flex-row content-start items-start md:items-center gap-4 text-black dark:text-gray-300">
                <label
                  htmlFor="email "
                  className="md:ml-6  text-lg md:text-sm lg:text-lg"
                >
                  Your Email :
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Adress"
                  className=" p-2 md:ml-1  border-2 border-blue-200 shadow-blue-200 dark:shadow-gray-700  shadow-lg rounded-md  w-full md:w-[65%] md:flex-row items-center gap-4 text-black dark:text-gray-300 dark:border-gray-600 dark:bg-[#252529] bg-[#fafafa] focus:border focus:border-blue-400 dark:focus:border-blue-600 outline-none focus:shadow-sm focus:shadow-blue-200 "
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col  md:flex-row items-start md:items-center gap-4 text-black dark:text-gray-300">
                <label
                  htmlFor="message "
                  className="text-lg md:text-sm lg:text-lg"
                >
                  {" "}
                  Your Message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="p-2 border-2 border-blue-200 shadow-blue-200 dark:shadow-gray-700 shadow-lg min-h-30 rounded-md max-h-52 rounded-flex w-full md:w-[65%] flex-col  md:flex-row items-center gap-4 text-black dark:text-gray-300 dark:border-gray-600 dark:bg-[#252529] bg-[#fafafa] focus:border focus:border-blue-400 dark:focus:border-blue-600 outline-none focus:shadow-sm focus:shadow-blue-200 "
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="border-1 border-blue-200 py-1 px-4 w-full md:w-28 md:ml-10 rounded-2xl dark:bg-[#252529] bg-[#fafafa] dark:text-gray-300  hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow dark:border-gray-500 hover:shadow-blue-200 "
              >
                {state.submitting ? <span className="loader "></span> : "send"}
              </button>
              {state.succeeded && (
                <p className=" text-black dark:text-gray-300 flex justify-center items-center ">
                  <Lottie
                    loop={false}
                    className="w-14 h-14"
                    animationData={done}
                  />
                  Thanks for joining{" "}
                  <span className="text-red-500 ml-2">❤</span>
                </p>
              )}
            </form>
          </div>
          <div className=" hidden md:flex justify-center items-center ">
            <Lottie className="h-[500px]  " animationData={email1} />
          </div>
        </div>
      </section>
    </>
  );
}
