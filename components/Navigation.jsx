import Link from "next/link";
import React from "react";
import ThemeSwitch from "../components/ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md uppercase dark:text-white"
            }
          >
            Kade Esterline
          </a>
        </Link>
        <div className="flex items-center ">
          <Link href="/Projects">
            <a
              className={
                "text-xs tracking-wider transition-colors text-gray-900 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md uppercase dark:text-white p-2"
              }
            >
              Projects
            </a>
          </Link>

          <Link href="/Blog">
            <a
              className={
                "text-xs tracking-wider transition-colors text-gray-900 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md uppercase dark:text-white p-2"
              }
            >
              Blog
            </a>
          </Link>

          <Link href="/Contact">
            <a
              className={
                "text-xs tracking-wider transition-colors text-gray-900 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md uppercase dark:text-white p-2"
              }
            >
              Contact
            </a>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
