"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  urls: Array<object>;
}

const Navbar: React.FC<NavbarProps> = ({ urls }) => {
  const slideOverContainer1 = useRef<HTMLSpanElement | null>(null);
  const slideOverContainer = useRef<HTMLSpanElement | null>(null);
  const slideOverBG = useRef<HTMLSpanElement | null>(null);
  const slideOver = useRef<HTMLSpanElement | null>(null);

  const toggleSlideover = () => {
    slideOverContainer.current?.classList.toggle("invisible");
    slideOverBG.current?.classList.toggle("opacity-0");
    slideOverBG.current?.classList.toggle("opacity-50");
    slideOver.current?.classList.toggle("translate-x-full");
  };
 
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-md bg-blue-400 md:mx-auto text-white">
        <div className="div-logo">
          <Link href="/">
            <Image
              src="/logo-full.webp"
              width={50}
              height={0}
              className="hidden md:block w-full"
              alt="logo-full"
            />
            <Image
              src="/logo-small-removebg-preview.png"
              width={50}
              height={0}
              className="block md:hidden w-full"
              alt="logo-mini"
            />
          </Link>
        </div>
        <div>
          <div className="hidden md:flex gap-5">
            {urls.map((item, index) => (
              <Link href={item.url} key={index}>
                {" "}
                {item.name}
              </Link>
            ))}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 block md:hidden"
            onClick={toggleSlideover}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <div
        className="block md:hidden z-50 w-screen h-screen items-center justify-center absolute"
        ref={slideOverContainer1}
      >
        <div
          id="slideover-container"
          ref={slideOverContainer}
          className="w-full h-full fixed inset-0 invisible"
        >
          <div
            id="slideover-bg"
            ref={slideOverBG}
            className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 opacity-0"
          />
          <div
            id="slideover"
            ref={slideOver}
            className="w-96 bg-cyan-100 h-full absolute right-0 duration-300 ease-out transition-all translate-x-full"
          >
            <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
              <svg
                onClick={toggleSlideover}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
