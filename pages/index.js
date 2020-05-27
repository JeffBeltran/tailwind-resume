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
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 font-heading sm:text-5xl sm:leading-none md:text-6xl">
          Introducing the next{" "}
          <span className="text-gray-900 underline">tailwind</span> employee{" "}
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
