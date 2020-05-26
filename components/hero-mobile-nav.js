import { menuOptions } from "../lib/menu-options";
import Link from "next/link";
import Logo from "./logo";

function HeroMobileNav({ toggleMobile }) {
  return (
    <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
      <div className="rounded-lg shadow-md">
        <div className="overflow-hidden bg-white rounded-lg shadow-xs">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <Link href="/">
                <a>
                  <Logo></Logo>
                </a>
              </Link>
            </div>
            <div className="-mr-2">
              <button
                onClick={toggleMobile}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
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
          <div className="px-2 pt-2 pb-3">
            {menuOptions.map((option, index) => {
              return (
                <Link key={index} href={option.path}>
                  <a className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
                    {option.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMobileNav;
