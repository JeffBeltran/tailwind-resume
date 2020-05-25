import { BasePage, Card } from "../components";
import { useRouter } from "next/router";
import { allTags } from "../lib/skills";
import Link from "next/link";

export default function Skills() {
  const router = useRouter();

  return (
    <>
      <BasePage pageTitle="Skills Cloud" activeUrl={router.pathname}>
        <div className="grid grid-cols-1 gap-4 px-4 sm:px-0 sm:grid-cols-3">
          {allTags.map((tag, index) => {
            return (
              <Link href={`/skills/${tag.slug}`} key={index}>
                <a className="flex items-center justify-center px-8 py-8 text-teal-800 bg-teal-100 border border-teal-100 rounded-lg hover:border-teal-300 hover:shadow">
                  {tag.name}
                </a>
              </Link>
            );
          })}
        </div>
      </BasePage>
    </>
  );
}
