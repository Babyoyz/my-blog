"use client";
import dynamic from "next/dynamic";
import CardBlog from "@/components/CardBlog";
import utilsConvertDate from "@/utils/ConvertDate"
import Category from "@/app/components/CategorySelect";
import React, { useEffect, useState } from "react";

const MultipleCarousel = dynamic(
  () => import("@/components/MultipleCarousel"),
  {
    loading: () => (
      <div className="w-full h-screen   opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-neutral-700 dark:text-white text-xl font-semibold">
          Loading...
        </h2>
      </div>
    ),
  }
);

export default function Home() {

  const [Blogs, setBlog] = useState<Blog[] | []>([]);

  // const getData = (params: string) => async () => {

  //   setBlog([])

  //   const response = await fetch("api/blog");

  //   const result = await response.json();

  //   setBlog(result);

  // };

  const getData = async (params: string) => {

    setBlog([])

    const response = await fetch("api/blog");

    const result = await response.json();

    setBlog(result);

  };




  useEffect(() => {
    getData('all');

    return () => {

      utilsConvertDate.ConvertDate()
    }
  }, []);

  return (
    <main className="">
      <div className="mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
        <MultipleCarousel label="My Motorcycle" Images={[]} />
      </div>
      <section className="mb-4 bg-blue-50">
      <div className="main-card-blog px-4 md:px-8 py-12">
        <div className="main-card-blog-label">
          <h1 className="font-cabinetGrotesk text-2xl lg:text-3xl font-bold mb-12 leading-tight text-black dark:text-white ">
            New Blog
          </h1>
        </div>
        <div className="card-body max-w-screen-lg mx-auto ">
          <div className="Category py-5 sticky top-0 z-40">
                  <Category onClick={getData} />
          </div>
          <div>
          {Blogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
              {Blogs.map((item, index) => (
                <CardBlog
                  key={index}
                  createby={item.title}
                  title={item.title}
                  textbody={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora dolore praesentium aliquam optio. Voluptatum inventore officia dignissimos porro aut nemo, incidunt totam nihil corrupti dolor, numquam officiis consequuntur, quibusdam ea laboriosam. Obcaecati molestias minima quidem. Quis dicta impedit repellat? Soluta aliquam saepe deleniti quidem accusantium cupiditate voluptates praesentium iste iusto quasi animi unde repudiandae sapiente ut officiis quam veniam incidunt dolor labore eius, consectetur natus. Nobis obcaecati nisi aperiam dolorum vitae veniam aspernatur labore fuga doloribus! Earum amet dolorem laudantium, magni, pariatur alias suscipit, saepe dolorum laborum architecto asperiores? Earum voluptatem beatae commodi debitis veniam error voluptatibus aliquid enim.`}
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-screen   opacity-75 flex flex-col items-center justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
              <h2 className="text-center text-neutral-700 dark:text-white text-xl font-semibold">
                Loading...
              </h2>
            </div>
          )}
          </div>
      
        </div>
      </div>
      </section>
   
    </main>
  );
}
