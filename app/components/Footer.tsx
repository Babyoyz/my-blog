import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-blue-400 text-center dark:bg-neutral-700 text-black dark:text-white  lg:text-left absolute bottom-0 w-full">
        <div className="p-4 text-center  dark:text-neutral-200">
          © {new Date().getFullYear()} Copyright:
          <Link
            className=""
            href="">BabyOYZ Blog . </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
