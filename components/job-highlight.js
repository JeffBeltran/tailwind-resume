import Link from "next/link";

function JobHighlight({ highlight }) {
  return (
    <li>
      <div className="flex flex-col px-4 py-4 space-y-4 sm:px-6">
        <div className="leading-5 text-gray-600">{highlight.description}</div>
        {highlight.skills.length > 0 && (
          <div className="flex overflow-hidden">
            {highlight.skills.map((skill, index) => {
              return (
                <Link
                  href="/skills/[slug]"
                  as={`/skills/${skill.slug}`}
                  key={index}
                >
                  <a className="first:ml-0 -ml-1 inline-block px-2.5 py-0.5 rounded hover:text-teal-50 hover:bg-teal-500 text-white shadow-solid bg-teal-400">
                    {skill.name}
                  </a>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
}

export default JobHighlight;
