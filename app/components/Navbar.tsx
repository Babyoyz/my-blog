"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const LineMobileNav = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
`;

import ButtonDarkMode from "@/components/ButtonDarkMode";
interface NavbarProps {
  urls: Array<any>;
}

const Navbar: React.FC<NavbarProps> = ({ urls }) => {
  const slideOverContainer1: any = useRef<HTMLSpanElement | null>(null);
  const slideOverContainer: any = useRef<HTMLSpanElement | null>(null);
  const slideOverBG: any = useRef<HTMLSpanElement | null>(null);
  const slideOver: any = useRef<HTMLSpanElement | null>(null);

  const toggleSlideover = () => {
    slideOverContainer.current?.classList.toggle("invisible");
    slideOverBG.current?.classList.toggle("opacity-0");
    slideOverBG.current?.classList.toggle("opacity-50");
    slideOver.current?.classList.toggle("translate-x-full");
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between w-full z-50 py-4 md:py-0 px-4 text-md bg-blue-400  dark:bg-neutral-700 dark:text-white  md:mx-auto text-black sticky top-0">
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
            <ButtonDarkMode />
          </div>
          <div className="flex md:hidden  gap-2">
            <ButtonDarkMode />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
              onClick={toggleSlideover}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
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
            className="w-96 bg-cyan-100 dark:bg-neutral-600  h-full absolute right-0 duration-300 ease-out transition-all translate-x-full"
          >
            <div className="absolute cursor-pointer text-neutral-600 dark:text-white top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
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
            <div>
              <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col">
                  <div className="flex-grow"></div>
                  <div className="flex-shrink text-center">
                    <div className="">
                      <LineMobileNav href="/" onClick={toggleSlideover}>
                        {" "}
                        <h1 className="dark:text-white">Home</h1>
                      </LineMobileNav>
                    </div>
                    {urls.map((item, index) => (
                      <div className="" key={index}>
                        <LineMobileNav
                          href={item.url}
                          onClick={toggleSlideover}
                        >
                          {" "}
                          <h1 className="dark:text-white">{item.name}</h1>
                        </LineMobileNav>
                      </div>
                    ))}
                  </div>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
