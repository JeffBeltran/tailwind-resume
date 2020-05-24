import Link from "next/link";

function JobHighlight({ highlight }) {
  return (
    <li>
      <div className="flex flex-col px-4 py-4 space-y-4 sm:px-6">
        <div className="leading-5 text-gray-600">{highlight.body}</div>
        <div className="flex overflow-hidden">
          {highlight.tags.map((tag, index) => {
            return (
              <Link href={`/knowledge-cloud/${tag.slug}`} key={index}>
                <a className="first:ml-0 -ml-1 inline-block px-2.5 py-0.5 rounded hover:text-teal-50 hover:bg-teal-500 text-white shadow-solid bg-teal-400">
                  {tag.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default JobHighlight;
