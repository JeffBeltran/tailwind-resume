function CTA({ children }) {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to learn more about Jeff?
        </h2>
        <div className="flex justify-center mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
            >
              Start with his Cover Letter
            </a>
          </div>
          <div className="inline-flex ml-3">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300"
            >
              Or His Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
