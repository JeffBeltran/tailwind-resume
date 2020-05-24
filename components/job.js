import JobHighlight from "./job-highlight";
import DateRange from "./date-range";

function Job({ job }) {
  return (
    <dl className="grid grid-cols-1 row-gap-8 col-gap-4 pt-6 first:pt-0 sm:grid-cols-2">
      {!job.project && (
        <>
          <div className="sm:col-span-1">
            <dt className="leading-5 text-teal-400 font-heading">Title</dt>
            <dd className="mt-1 leading-5 text-gray-900">{job.title}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="leading-5 text-teal-400 font-heading">Company</dt>
            <dd className="mt-1 leading-5 text-gray-900">{job.company}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="leading-5 text-teal-400 font-heading">Dates</dt>
            <dd className="mt-1 leading-5 text-gray-900">
              <DateRange start={job.start} end={job.end}></DateRange>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="leading-5 text-teal-400 font-heading">Location</dt>
            <dd className="mt-1 leading-5 text-gray-900">{job.location}</dd>
          </div>
        </>
      )}
      <div className="sm:col-span-2">
        <dt className="leading-5 text-teal-400 font-heading">About</dt>
        <dd className="mt-1 leading-5 text-gray-900">{job.overview}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="leading-5 text-teal-400 font-heading">Highlights</dt>
        <dd className="mt-2 leading-5 text-gray-900">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {job.highlights.map((highlight, index) => {
                return (
                  <JobHighlight
                    highlight={highlight}
                    key={index}
                  ></JobHighlight>
                );
              })}
            </ul>
          </div>
        </dd>
      </div>
    </dl>
  );
}

export default Job;
