import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

function Profilecard() {
  return (
    <>
      <div className="w-8/12 overflow-hidden shadow-lg rounded-3xl text-black dark:text-white">
        <div className="block md:flex">
          <div className="w-full sm:w-1/3">
            <Image
              src="https://babyoyz.github.io/my-app-port/static/media/profile_new.6ccc264f65504f6fb209.jpg"
              alt="Profile new"
              className="h-auto w-full sm:flex sm:justify-center"
              height={0}
              width={200}
            />
          </div>
          <div className="w-full h-auto py-5">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">BabyOYZ . (Oil) </div>
              <p className="text-base">
                Thaweeporn Areepun current work Developer at Wisesight . 
              </p>
              <p className="text-base px-4 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad beatae consequatur expedita molestiae possimus nemo vel perferendis corporis soluta modi cum adipisci cupiditate vitae nulla veniam illum nobis pariatur, quibusdam dignissimos quos omnis a saepe. Praesentium excepturi veritatis nostrum nisi recusandae rerum fuga quisquam exercitationem beatae sint iure necessitatibus, ipsum voluptate quos quibusdam vel tenetur, inventore doloribus est atque. Consequuntur nisi placeat dignissimos id ipsa eveniet aperiam corrupti dolorum nostrum, beatae illum culpa maiores similique impedit quisquam possimus! Dolor sapiente incidunt atque magnam doloremque expedita ab voluptatum obcaecati alias delectus. Magni sit distinctio esse modi nihil odio doloremque repudiandae?
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                #roadtrip
              </span>
              <span className="inline-block bg-green-200 rounded-full dark:bg-green-800 px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 dark:bg-red-800 text-sm font-semibold  mr-2 mb-2">
                #motorcycle
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 dark:bg-blue-800 text-sm font-semibold  mr-2 mb-2">
                #Campping
              </span>
            </div>
            <div className="px-6 flex flex-col h-full self-end">
              <div className="px-6 div-social  gap-5 flex">
                <SocialIcon
                  network="github"
                  target="_blank"
                  url="https://github.com/Babyoyz"
                />
                <SocialIcon
                  network="discord"
                  target="_blank"
                  url="www.vimeo.com"
                />
                <SocialIcon
                  network="facebook"
                  target="_blank"
                  url="https://www.facebook.com/oilza600"
                />
                <SocialIcon
                  network="twitch"
                  target="_blank"
                  url="https://www.facebook.com/oilza600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilecard;
