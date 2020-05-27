import { BasePage, Card, TextBlock } from "../components";
import { useRouter } from "next/router";
import Head from "next/head";

export default function CoverLetter() {
  const router = useRouter();

  return (
    <BasePage pageTitle="Cover Letter" activeUrl={router.pathname}>
      <Head>
        <title>I hope this letter finds you well</title>
      </Head>
      <Card>
        <div className="space-y-6">
          <TextBlock>Hey there Adam and Steve,</TextBlock>
          <TextBlock>
            I love to tinker, so when I saw this job posting last week, I got
            very excited. Not only because this job sounds amazing, but I knew
            it was a perfect opportunity to work on an idea that has been
            rolling around in my head.
          </TextBlock>
          <TextBlock>
            I have always been a tinkerer; just ask my parents about the “coffee
            maker incident”. I’ll spare you the details, but it involves water
            and electricity. Despite this early hiccup, my tinkering spirit
            lives on, albeit with less danger, in the form of programming. It
            allows me to constantly tinker with problems I encounter.
          </TextBlock>
          <TextBlock>
            One problem that I really enjoy solving is tedium. I have a very low
            tolerance for tedious tasks and would gladly spend a week creating
            something that removes a task that might have taken 5 minutes. This
            is exponentially more enjoyable when this problem is now solved for
            other people.
          </TextBlock>
          <TextBlock>
            When I first got a chance to use TailwindUI it was an amazing tool,
            but it had one problem, it was tedious to get those beautiful
            components into an application. After listening to the Mark
            Dalgleish episode of Full Stack Radio, I had a “why didn’t I think
            of that” moment and got to work converting a few TailwindUI
            components to Vue components. This was a fun problem, as until this
            point I have never had a need for named/scoped slots. After just a
            few of these components, I can see why there is a job posting.
          </TextBlock>
          <TextBlock>
            Working on this application has made me more excited to be a
            Tailwind employee, I really enjoy this kind of work. The combination
            of getting to tinker with new things, solve new/old problems, and
            help other developers is super appealing to me. Quite frankly, this
            looks to be my dream job, and I would love the opportunity to talk
            in greater detail about how my skill set can help shape the tools
            and products the Tailwind team wants to build.
          </TextBlock>
          <TextBlock>Cheers,</TextBlock>
          <p className="text-4xl font-handwriting">Jeff</p>
        </div>
      </Card>
    </BasePage>
  );
}
