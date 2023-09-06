import Image from "next/image";
import React from "react";

interface CardProps {
  createby: string;
  title: string;
  textbody: string;
}

const CardBlog: React.FC<CardProps> = ({ createby, title, textbody }) => {
  return (
    <>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 relative">
        <div className="absolute top-0 right-0">
          <Image
            src={`https://ui-avatars.com/api/?name=${createby}&background=random&size=86`}
            height={0}
            width={300}
            className="w-full rounded-bl-lg"
            alt="avatar"
          />
        </div>
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-1">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3 line-clamp-4">
            {textbody}
          </p>
          <div className="w-full flex justify-end mt-5">
            <a
              className="text-white bg-blue-400 hover:bg-blue-500
               focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
               dark:bg-neutral-700
               text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlog;
