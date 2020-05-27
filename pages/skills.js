import Link from "next/link";
import Head from "next/head";

import { BasePage } from "../components";
import { useRouter } from "next/router";
import { getAllSkills } from "../lib/skills";

const _ = require("lodash");

export default function Skills({ skills }) {
  const router = useRouter();

  return (
    <BasePage pageTitle="Skills Cloud" activeUrl={router.pathname}>
      <Head>
        <title>{`All Skills`}</title>
      </Head>
      <div className="grid grid-cols-2 gap-4 px-4 sm:px-0 sm:grid-cols-5">
        {skills.map((skill, index) => {
          return (
            <Link
              href="/skills/[slug]"
              as={`/skills/${skill.slug}`}
              key={index}
            >
              <a className="flex items-center justify-center px-8 py-8 text-teal-800 bg-teal-100 border border-teal-100 rounded-lg hover:border-teal-300 hover:shadow">
                {skill.name}{" "}
                <span className="ml-2 text-xs">
                  [{skill.highlights.length}]
                </span>
              </a>
            </Link>
          );
        })}
      </div>
    </BasePage>
  );
}

export async function getStaticProps({ params }) {
  const skills = await getAllSkills();
  const sortByHighlights = _.orderBy(skills, ["highlights"], ["desc"]);
  return {
    props: {
      skills: sortByHighlights,
    },
  };
}
