import MainNav from "./main-nav";
import Footer from "./footer";
import Link from "next/link";

function BasePage({ children, pageTitle, activeUrl, showBreadcrumps }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainNav activeUrl={activeUrl}></MainNav>
      <div className="flex-1 py-10">
        <header>
          <div className="px-4 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div>
              {showBreadcrumps && (
                <div>
                  <nav className="sm:hidden">
                    <Link href="/skills">
                      <a className="flex items-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        All Skills
                      </a>
                    </Link>
                  </nav>
                  <nav className="items-center hidden text-sm font-medium sm:flex">
                    <Link href="/skills">
                      <a className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
                        Skills
                      </a>
                    </Link>
                    <svg
                      className="flex-shrink-0 w-5 h-5 mx-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-500 transition duration-150 ease-in-out">
                      {pageTitle}
                    </p>
                  </nav>
                </div>
              )}
              <div className="mt-2 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-teal-400 sm:text-3xl sm:truncate">
                    {pageTitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BasePage;
