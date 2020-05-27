import Link from "next/link";

function TagCloud({ skills }) {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 font-heading sm:text-4xl sm:leading-10">
              What is Jeff bringing to the Tailwind team?
            </h2>
            <p className="max-w-3xl mt-3 text-lg leading-7 text-gray-600 ">
              Well as luck would have it, he put together a list of frameworks,
              languages and relevant technologies he has used in some capacity.
              To the right (or bottom if on mobile) are the most relevant, but
              feel free to browse them all.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link href="/skills">
                  <a className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-600 border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:shadow-outline">
                    View all skills
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {skills.map((skill, index) => {
              return (
                <Link
                  key={index}
                  href="/skills/[slug]"
                  as={`/skills/${skill.slug}`}
                >
                  <a className="flex justify-center col-span-1 px-8 py-8 text-teal-800 bg-teal-100 border border-teal-100 rounded-lg hover:border-teal-300 hover:shadow">
                    <p>{skill.name}</p>
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
