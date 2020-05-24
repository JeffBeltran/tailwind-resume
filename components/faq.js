import { questionsAndAnswers } from "../lib/faq";
import { Fragment, useState } from "react";

function FAQ() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900 sm:text-4xl sm:leading-10">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-200">
            <dl className="space-y-6 divide-y divide-gray-200">
              {questionsAndAnswers.map((questionAnswer, index) => {
                return (
                  <div className="pt-6" key={index}>
                    <dt className="text-lg leading-7">
                      {/* <!-- Expand/collapse question button --> */}
                      <button
                        onClick={() => setActiveQuestionIndex(index)}
                        className="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
                      >
                        <span className="font-medium text-gray-900">
                          {questionAnswer.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <svg
                            className={`${
                              activeQuestionIndex === index
                                ? "-rotate-180"
                                : " rotate-0"
                            } w-6 h-6 transform`}
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd
                      className={`${
                        activeQuestionIndex !== index && "hidden"
                      } pr-12 mt-2`}
                    >
                      <p className="text-base leading-6 text-gray-500">
                        {questionAnswer.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
