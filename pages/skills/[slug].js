import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { BasePage, JobHighlight, Card } from "../../components";
import { getSkillSlugs, getSkill } from "../../lib/skills";

export default function Skill({ skill, relatedSkills }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Jeff knows ${skill.name}`}</title>
      </Head>
      <BasePage
        pageTitle={skill.name}
        activeUrl={router.pathname}
        showBreadcrumps
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="grid grid-cols-1 gap-4 sm:col-span-4">
            <Card heading="Jeff's Commentary">
              <div className="space-y-3">
                <p className="text-lg">{skill.note}</p>
                <p>
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
            </Card>
            <Card heading="Highlights that reference this skill">
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
          </div>
          <div className="sm:col-span-2">
            <Card heading="Related Skills">
              <div className="grid grid-cols-2 gap-4">
                {relatedSkills.map((skill, index) => {
                  return (
                    <Link
                      href="/skills/[slug]"
                      as={`/skills/${skill.slug}`}
                      key={index}
                    >
                      <a className="text-center px-2.5 py-0.5 rounded hover:text-teal-50 hover:bg-teal-500 text-white bg-teal-400">
                        {skill.name}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
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
  const relatedSkills = [...skill.children, skill.parent].filter((e) => e);
  return {
    props: {
      skill,
      relatedSkills,
    },
  };
}
