import React from "react";
// import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="relative top-10 md:relative md:top-10 lg:top-10 xl:top-0 w-full h-26 bg-green-600/60 mt-2 justify-center">
        <div className="flex flex-col items-center">
          <span className="mt-2 text-lg font-semibold bg-yellow-500/90 p-2 rounded-lg">
            Felix Vega - Frontend Developer
          </span>
          <div className="flex flex-row w-48 justify-between mb-2 mt-4">
            <a
              href="https://github.com/FelixVNolasco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300/90 p-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* <Image
                src="/github.svg"
                alt="Github Logo"
                width={32}
                height={32}
              /> */}
            </a>

            <a
              href="https://www.linkedin.com/in/felixvnolasco/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-300/90 p-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2 "
            >
              {/* <Image
                src="/linkedin.svg"
                alt="Linkedin Logo"
                width={32}
                height={32}
              /> */}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
