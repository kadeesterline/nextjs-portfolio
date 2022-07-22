import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-slate-600"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://www.linkedin.com/in/kade-esterline/"
              className={
                "transition-colors hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-md"
              }
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kadeesterline"
              className={
                "transition-colors hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-md"
              }
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://dev.to/kadeesterline"
              className={
                "transition-colors hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-md"
              }
              target="_blank"
              rel="noreferrer"
            >
              DEV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
