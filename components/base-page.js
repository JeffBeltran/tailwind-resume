import MainNav from "./main-nav";
import Footer from "./footer";

function BasePage({ children, pageTitle, activeUrl }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainNav activeUrl={activeUrl}></MainNav>
      <div className="flex-1 py-10">
        <header>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {pageTitle}
            </h1>
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
