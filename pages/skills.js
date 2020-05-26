import { BasePage, Card } from "../components";
import { useRouter } from "next/router";
import { getAllSkills } from "../lib/skills";
import Link from "next/link";

export default function Skills({ skills }) {
  const router = useRouter();

  return (
    <>
      <BasePage pageTitle="Skills Cloud" activeUrl={router.pathname}>
        <div className="grid grid-cols-1 gap-4 px-4 sm:px-0 sm:grid-cols-3">
          {skills.map((skill, index) => {
            return (
              <Link href={`/skills/${skill.slug}`} key={index}>
                <a className="flex items-center justify-center px-8 py-8 text-teal-800 bg-teal-100 border border-teal-100 rounded-lg hover:border-teal-300 hover:shadow">
                  {skill.name}
                </a>
              </Link>
            );
          })}
        </div>
      </BasePage>
    </>
  );
}

export async function getStaticProps({ params }) {
  const skills = await getAllSkills();
  return {
    props: {
      skills,
    },
  };
}
