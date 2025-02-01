import profile from "../../assts/img/yasser-modified.png";

export default function Footer() {
  return (
    <>
      <footer className=" border-t dark:border-gray-600 py-5 flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={profile} className="w-12" alt="" />
          <p className="Caveat-font tracking-wider text-[13px] md:text-lg dark:text-gray-300">
            {" "}
            <span className="text-red-400">Yasser Elshiwy</span> , Front-End Wep
            Develper
          </p>
        </div>
        <div>
          <p className=" tracking-wider text-[10px] md:text-sm dark:text-gray-300">
            © 2024 Spencer Sharp. All rights reserved{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
