import { menuOptions } from "../lib/menu-options";

function HeroMainNav({ toggleMobile }) {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <img
              className="w-auto h-8 sm:h-10"
              src="/img/logos/workflow-mark-on-white.svg"
              alt=""
            />
          </a>
          <div className="flex items-center -mr-2 md:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden space-x-10 md:flex">
        {menuOptions.map((option, index) => {
          return (
            <a
              key={index}
              href={option.path}
              className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {option.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default HeroMainNav;
