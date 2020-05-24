import Link from "next/link";
import { tagHighlights } from "../lib/knowlege-tags";

function TagCloud() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 font-heading sm:text-4xl sm:leading-10">
              What kind of knowledge is Jeff bringing to the Tailwind team?
            </h2>
            <p className="max-w-3xl mt-3 text-lg leading-7 text-gray-500 ">
              He was kind enough to put together a list of frameworks, languages
              and relevant technologies he has used in some compactly. To the
              right are the most relevant but feel free to browse the full tag
              cloud for more
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link href="#">
                  <a className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-600 border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:shadow-outline">
                    View Full Knowledge Cloud
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {tagHighlights.map((tag, index) => {
              return (
                <Link key={index} href={`/knowledge/${tag.slug}`}>
                  <a className="flex justify-center col-span-1 px-8 py-8 text-teal-800 bg-teal-100 border border-teal-100 rounded-lg hover:border-teal-300 hover:shadow">
                    <p>{tag.name}</p>
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

export default TagCloud;
