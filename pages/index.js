import { Hero, Testimonial, FAQ, CTA, TagCloud, Footer } from "../components";
import { getFeaturedSkills } from "../lib/skills";

export default function Home({ featuredSkills }) {
  return (
    <>
      <Hero>
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 font-heading sm:text-5xl sm:leading-none md:text-6xl">
          Introducing the next <span className="underline">tailwind UI</span>{" "}
          employee <br />
        </h2>

        <p className="mt-4 text-4xl font-extrabold leading-10 tracking-tight text-teal-400 font-heading sm:text-5xl sm:leading-none md:text-6xl">
          Jeff Beltran
        </p>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          He took a little over a week to apply, as he had to teach himself
          React and Nextjs. But he proved to himself that his imposter syndrome
          was all for naught and showed Adam he had the right chops for the job.
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
      <CTA></CTA>
      <TagCloud skills={featuredSkills}></TagCloud>
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
