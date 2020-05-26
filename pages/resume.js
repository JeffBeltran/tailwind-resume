import Link from "next/link";
import { useRouter } from "next/router";

import { BasePage, Card, TextBlock, Job } from "../components";
import { getFeaturedSkills } from "../lib/skills";
import { getAllJobs } from "../lib/jobs";
import { getAllDegrees } from "../lib/degrees";

export default function Resume({ featuredSkills, jobs, degrees }) {
  const router = useRouter();

  return (
    <BasePage pageTitle="Resume" activeUrl={router.pathname}>
      <div className="flex flex-col space-y-8">
        <Card heading="Summary">
          <TextBlock>
            Full-stack developer with 10 years of professional experience
            developing and maintaining web-based applications. Conducts ongoing
            analysis of the organization's IT infrastructure to determine
            product compatibility and solutions. Skilled mentor, trainer, and
            project leader; able to direct multiple tasks effectively and
            readily master innovative software and tools. Familiarity with Cloud
            computing concepts, hosting, and databases.
          </TextBlock>
        </Card>
        <Card heading="Relevant Skills">
          <div className="grid grid-cols-3 gap-4 ">
            {featuredSkills.map((skill, index) => {
              return (
                <Link href={`/skills/${skill.slug}`} key={index}>
                  <a className="items-center p-4 text-sm font-medium leading-5 text-teal-800 bg-teal-100 rounded hover:bg-teal-400">
                    {skill.name}
                  </a>
                </Link>
              );
            })}
            <Link href={`/skills`}>
              <a className="items-center p-4 text-sm font-medium leading-5 text-teal-500 border border-transparent rounded hover:text-teal-800 hover:border-teal-800">
                View all skills ...
              </a>
            </Link>
          </div>
        </Card>
        <Card heading="Professional Experience">
          <div className="space-y-6 divide-y divide-teal-400">
            {jobs.map((job, index) => {
              return <Job job={job} key={index}></Job>;
            })}
          </div>
        </Card>
        <Card heading="Education">
          {degrees.map((degree, index) => {
            return (
              <div key={index} className="text-lg">
                <p className="font-heading">{`${degree.level} in ${degree.field}`}</p>
                <p>{`${degree.institution.name}, ${degree.institution.city}, ${degree.institution.state}`}</p>
              </div>
            );
          })}
        </Card>
        <Card heading="Relevant Side Projects">
          <div className="space-y-6 divide-y divide-teal-400">
            {jobs.map((job, index) => {
              return <Job job={job} key={index}></Job>;
            })}
          </div>
        </Card>
      </div>
    </BasePage>
  );
}

export async function getStaticProps() {
  const featuredSkills = await getFeaturedSkills();
  const jobs = await getAllJobs();
  const degrees = await getAllDegrees();
  return {
    props: {
      featuredSkills,
      jobs,
      degrees,
    },
  };
}
