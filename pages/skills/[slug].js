import { useRouter } from "next/router";
import Head from "next/head";

import { BasePage, JobHighlight, Card } from "../../components";
import { getSkillSlugs, getSkill } from "../../lib/skills";

export default function Skill({ skill }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Jeff knows ${skill.name}`}</title>
      </Head>
      <BasePage pageTitle={skill.name} activeUrl={router.pathname}>
        <Card>
          <div className="pb-12 space-y-3">
            <p className="text-lg">{skill.note}</p>
            <p className="text-sm">
              <span className="font-bold">Learn More: </span>
              <a
                href={skill.website}
                target="_blank"
                className="text-teal-400 hover:text-teal-600 hover:underline"
              >
                {skill.website}
              </a>
            </p>
          </div>
          <p className="pb-6 text-xl leading-5 text-teal-600 font-heading">
            Highlights from Jobs and Projects that used this skill:
          </p>
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {skill.highlights.map((highlight, index) => {
                return (
                  <JobHighlight
                    highlight={highlight}
                    key={index}
                  ></JobHighlight>
                );
              })}
            </ul>
          </div>
        </Card>
      </BasePage>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSkillSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const skill = await getSkill(params.slug);
  return {
    props: {
      skill,
    },
  };
}
