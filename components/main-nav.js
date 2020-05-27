import { menuOptions } from "../lib/menu-options";
import Link from "next/link";

import { useState } from "react";
import Logo from "./logo";

function MainNav({ activeUrl }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <a>
                  <Logo></Logo>
                </a>
              </Link>
            </div>
            <div className="flex hidden space-x-8 sm:-my-px sm:ml-6 sm:flex">
              {menuOptions.map((menuOption, index) => {
                return (
                  <Link href={menuOption.path} key={index}>
                    <a
                      className={`${
                        menuOption.path === activeUrl
                          ? "border-teal-500"
                          : "border-transparent"
                      } inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 transition duration-150 ease-in-out border-b-2 focus:outline-none focus:border-teal-700`}
                    >
                      {menuOption.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className={`${showMobileMenu ? "hidden" : "block"} w-6 h-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${showMobileMenu ? "block" : "hidden"} w-6 h-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${showMobileMenu ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {menuOptions.map((menuOption, index) => {
            return (
              <Link href={menuOption.path} key={index}>
                <a
                  className={`${
                    menuOption.path === activeUrl
                      ? "text-teal-700 border-teal-500 bg-teal-50 focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700"
                      : "text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  } block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 focus:outline-none`}
                >
                  {menuOption.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
