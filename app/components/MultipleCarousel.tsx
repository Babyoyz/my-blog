"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

type MultipleCarouselProps = {
  Images: Array<any>;
  label: string;
};

const MultipleCarousel: React.FC<MultipleCarouselProps> = ({
  Images,
  label,
}) => {
  const slidesContainer: any = useRef<HTMLSpanElement | null>(null);


  function nextButton() {
   
    slidesContainer.current.scrollLeft += 300;
  }

  function prevButton() {
    slidesContainer.current.scrollLeft -= 300;
  }

  return (
    <>
        <h1 className="font-cabinetGrotesk text-2xl lg:text-3xl font-bold mb-12 leading-tight text-black dark:text-white ">
          {label}
        </h1>
        <div className="relative">
          <div
            className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
            ref={slidesContainer}
          >
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600"
                alt="mountain_image"
                width={200}
                height={0}
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
                width={200}
                height={0}
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
                width={200}
                height={0}
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/10343729/pexels-photo-10343729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
                width={200}
                height={0}
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/13860053/pexels-photo-13860053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
                width={200}
                height={0}
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
                width={200}
                height={0}
              />
            </div>
          </div>
          <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
            <button
              role="button"
              className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="prev"
              onClick={prevButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
            <button
              role="button"
              className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="next"
              onClick={nextButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
    </>
  );
};

export default MultipleCarousel;
