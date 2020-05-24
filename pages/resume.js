import { BasePage, Card, TextBlock, Job } from "../components";
import { useRouter } from "next/router";
import { relevantTags } from "../lib/knowlege-tags";
import Link from "next/link";
import { jobs } from "../lib/jobs";

export default function Resume() {
  const router = useRouter();

  return (
    <>
      <BasePage pageTitle="Resume" activeUrl={router.pathname}>
        <div className="flex flex-col space-y-8">
          <Card heading="Summary">
            <TextBlock>
              Full-stack developer with 10 years of professional experience
              developing and maintaining web-based applications. Conducts
              ongoing analysis of the organization's IT infrastructure to
              determine product compatibility and solutions. Skilled mentor,
              trainer, and project leader; able to direct multiple tasks
              effectively and readily master innovative software and tools.
              Familiarity with Cloud computing concepts, hosting, and databases.
            </TextBlock>
          </Card>
          <Card heading="Relevant Proficiencies">
            <div className="grid grid-cols-3 gap-4 ">
              {relevantTags.map((tag, index) => {
                return (
                  <Link href={`/knowledge-cloud/${tag.slug}`} key={index}>
                    <a className="items-center p-4 text-sm font-medium leading-5 text-teal-800 bg-teal-100 rounded hover:bg-teal-400">
                      {tag.name}
                    </a>
                  </Link>
                );
              })}
              <Link href={`/knowledge-cloud`}>
                <a className="items-center p-4 text-sm font-medium leading-5 text-teal-500 border border-transparent rounded hover:text-teal-800 hover:border-teal-800">
                  View all Proficiencies ...
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
            <TextBlock>
              Massa per inceptos molestie varius condimentum habitasse nam duis
              lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
              penatibus, curae primis ad pretium tortor faucibus litora
              curabitur. Lobortis proin mollis phasellus tempor nisi cubilia
              molestie, lacinia sagittis natoque odio accumsan consectetur,
              commodo aptent facilisi morbi libero ultricies. Imperdiet donec
              suscipit odio magnis ante velit dictum sollicitudin, bibendum
              aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
              phasellus convallis et proin pharetra.
            </TextBlock>
          </Card>
          <Card heading="Relevant Side Project">
            <TextBlock>
              Massa per inceptos molestie varius condimentum habitasse nam duis
              lacinia, sociis magnis ut iaculis nostra semper tempus cubilia
              penatibus, curae primis ad pretium tortor faucibus litora
              curabitur. Lobortis proin mollis phasellus tempor nisi cubilia
              molestie, lacinia sagittis natoque odio accumsan consectetur,
              commodo aptent facilisi morbi libero ultricies. Imperdiet donec
              suscipit odio magnis ante velit dictum sollicitudin, bibendum
              aliquet nunc auctor lobortis dui placerat vivamus, fusce mauris
              phasellus convallis et proin pharetra.
            </TextBlock>
          </Card>
        </div>
      </BasePage>
    </>
  );
}
