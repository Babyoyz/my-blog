import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

function Profilecard() {
  return (
    <>
      <div className="w-8/12 rounded overflow-hidden shadow-lg">
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
          <div className="w-full">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">BabyOYZ . </div>
              <p className="text-gray-700 text-base">
                Thaweeporn Areepun (Oil) Developer at Wisesight
              </p>
              <p className="text-gray-700 text-base px-4 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil reprehenderit eum numquam quo id pariatur illo, nostrum ex debitis quis?
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #roadtrip
              </span>
              <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #motorcycle
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
