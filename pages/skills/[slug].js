import { BasePage, JobHighlight } from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import { getAllSkillSlugs, getSkillBySLug } from "../../lib/skills";

export default function Skill({ skill }) {
  const router = useRouter();
  console.log(skill);
  return (
    <BasePage pageTitle={skill.name} activeUrl={router.pathname}>
      <p className="leading-5 text-teal-400 font-heading">Highlights</p>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {skill.highlights.map((highlight, index) => {
            return (
              <JobHighlight highlight={highlight} key={index}></JobHighlight>
            );
          })}
        </ul>
      </div>
    </BasePage>
  );
}

export async function getStaticPaths() {
  const paths = getAllSkillSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const skill = getSkillBySLug(params.slug);
  return {
    props: {
      skill,
    },
  };
}
