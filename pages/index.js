import Head from "next/head";

import { Hero, Testimonial, FAQ, CTA, TagCloud, Footer } from "../components";
import { getFeaturedSkills } from "../lib/skills";

export default function Home({ featuredSkills }) {
  return (
    <>
      <Head>
        <title>{`Jeff Beltran, the new tailwind employee`}</title>
      </Head>
      <Hero>
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 font-heading sm:text-5xl sm:leading-none md:text-6xl">
          Introducing the next <span className="">tailwind</span> employee{" "}
          <br />
        </h2>

        <p className="mt-4 text-4xl font-extrabold leading-10 tracking-tight text-teal-400 font-heading sm:text-5xl sm:leading-none md:text-6xl">
          Jeff Beltran
        </p>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          His imposter syndrome was giving him doubts, but after spending his
          nights and the weekend to learn Next.js and React to build this site,
          Adam and Steve realized he had the right chops for the job.
        </p>
      </Hero>
      <Testimonial
        imgSrc="/leelooKorben.jpeg"
        name="LeeLoo & Korben"
        who="DogEO"
        from="Jeff's Pups"
      >
        Woof Woof Bark Bark
      </Testimonial>
      <FAQ></FAQ>
      <TagCloud skills={featuredSkills}></TagCloud>
      <CTA></CTA>
      <div className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 font-heading">
            Maybe just see how this site was created?
            <br />
            <span className="text-teal-600">Check out the Repos.</span>
          </h2>
          <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://github.com/JeffBeltran/tailwind-resume"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-600 border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:shadow-outline"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Frontend
              </a>
            </div>
            <div className="inline-flex ml-3 rounded-md shadow">
              <a
                href="https://github.com/JeffBeltran/whois"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-teal-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-teal-500 focus:outline-none focus:shadow-outline"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Backend
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps() {
  const featuredSkills = await getFeaturedSkills();
  return {
    props: {
      featuredSkills,
    },
  };
}
