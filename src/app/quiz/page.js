'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import PageLayout from '../components/pageLayout';
import {
  PREMISE,
  QUESTIONS,
  RESULT_MAP,
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  getQuizResult
} from './data';

function QuizForm() {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => setDisplayForm(!displayForm);

  return (
    <div>
      {PREMISE}
      {
        displayForm ? (
          <div>
            <form>
              {
                QUESTIONS.map(
                  ({ id: questionId, question, answers }) => (
                    <div className="mt-5" key={questionId}>
                      <fieldset>
                        <legend>{questionId}: {question}</legend>
                        {
                          answers.map(({ id: answerId, answer, type }) => (
                            <div key={answerId}>
                              <input id={answerId} type="radio" name={questionId} value={type} required />
                              <label htmlFor={answerId}>{' '}{answer}</label>
                            </div>
                          ))
                        }
                      </fieldset>
                    </div>
                  )
                )
              }
              <div className="text-center">
                <button
                  className="rounded-none bg-blue-700 text-white p-2 mt-5"
                  // then useSearchParams to get the result.
                >
                  Submit and get my gift
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center mt-5">
            <button
              className="rounded-none bg-blue-700 text-white p-2"
              onClick={toggleDisplayForm}
            >
              Ok, let's do this.
            </button>
          </div>
        )
      }
    </div>
  )
}

export default function Quiz() {
  const resultsRef = useRef(null);
  const searchParams = useSearchParams();
  const params = searchParams.toString();

  let displayResults = params.length > 0;

  let Results = () => <></>;

  // TODO: Scroll to result manually since the entire page is re-rendered on submit
  if (displayResults) {
    // TODO: If malformed params, set displayResults to false manually to start over
    // split params by &, and grab the values after the = sign
    const gatheredSelections = params.split('&').map(param => param.match(/=(.*)/)[1]);
    const resultMap = {};

    gatheredSelections.forEach(selection => {
      if (!resultMap[selection]) {
        resultMap[selection] = 1;
      } else {
        resultMap[selection] = resultMap[selection]+1;
      }
    });

    const result = getQuizResult({ resultMap });

    const { blurb, playlistLink } = RESULT_MAP[result];

    Results = () => (
      <div ref={resultsRef}>
        <div>
          {CONCLUSION_PART_1}
        </div>
        <br />
        <div>
          "{blurb}"
          {/* {playlistLink} */}
        </div>
        <br />
        <div>
          {CONCLUSION_PART_2}
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (displayResults && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  })

  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      // background="bg-[url('/goofy_bg_500_op_80.png')] bg-contain"
      background="bg-gradient-to-b from-slate-100 to-green-50"
      title="Playlist Personality Quiz"
    >
      <div className={"text-md lg:text-xl p-1 m-1"}>
        <div className="mt-2 md:mt-10">
          {
            displayResults ? (
              <Results />
            ) : (
              <QuizForm />
            )
          }
        </div>
        <br />
        {/* Hide results and conclusion until form submission */}
        {/* Ensure that all questions have been answered */}
      </div>
    </PageLayout>
  )
}
