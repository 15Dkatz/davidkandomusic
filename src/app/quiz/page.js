'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import PageLayout from '../components/pageLayout';
import {
  PREMISE,
  QUESTIONS,
  RESULT_MAP,
  VALID_SELECTIONS,
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  CONCLUSION_PART_3,
  getQuizResult
} from './data';

// TODO: Move to their own component files within this relative directory
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
                        <legend>{questionId}{')'} {question}</legend>
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
                  className="rounded-none bg-blue-700 text-white p-2 mt-8"
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

function Results({ resultsRef, resultData }) {
  return (
    <div ref={resultsRef}>
      <div>
        {CONCLUSION_PART_1}
      </div>
      <div className="font-bold">
        <div>
          """
        </div>
        <div>
          {resultData ? resultData.blurb : ''} {CONCLUSION_PART_2}
        </div>
        <div>
          """
        </div>
      </div>
      <br />
      {
        resultData ? (
          <>
            {resultData.embeddedPlaylist}
            <br />
            <div className="text-center">
              <a
                href={resultData.playlistLink}
                target="_blank"
                className="underline text-blue-800"
              >
                Save this playlist
              </a>
            </div>
            <br />
          </>
        ) : (
          <></>
        )
      }
      <div>
        {CONCLUSION_PART_3}
      </div>
    </div>
  )
}

export default function Quiz() {
  const [resultData, setResultData] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);
  const [displayQuiz, setDisplayQuiz] = useState(false);
  const [displayTryAgain, setDisplayTryAgain] = useState(false);
  const resultsRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = searchParams.toString();

  useEffect(() => {
    if (params.length === 0) {
      setDisplayQuiz(true);
      setDisplayTryAgain(false);
    } else {
      // split params by &, and grab the values after the = sign
      const gatheredSelections = params.split('&').map(param => param.match(/=(.*)/)[1]);

      if (!gatheredSelections.every(selection => VALID_SELECTIONS.includes(selection))) {
        setDisplayTryAgain(true);
      } else {
        const selectionMap = {};

        gatheredSelections.forEach(selection => {
          if (!selectionMap[selection]) {
            selectionMap[selection] = 1;
          } else {
            selectionMap[selection] = selectionMap[selection]+1;
          }
        });

        const resultData = RESULT_MAP[getQuizResult({ selectionMap })];

        if (resultData) {
          setResultData(RESULT_MAP[getQuizResult({ selectionMap })]);
        }

        setDisplayResult(true);
      }

      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Clean up on re-render if you click back on the quiz link
    return (() => {
      setDisplayResult(false);
    });
  }, [params, setResultData, setDisplayQuiz, displayResult, resultsRef.current, setDisplayTryAgain, setDisplayResult]);

  const tryAgain = () => {
    router.push('/quiz');
  };

  return (
    <PageLayout
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="Playlist Personality Quiz"
    >
      <div className={"text-md lg:text-xl p-1 m-1"}>
        <div className="mt-2">
          {
            displayQuiz ? (
              <QuizForm />
            ) : (
              <></>
            )
          }
          {
            displayResult ? (
              <Results resultsRef={resultsRef} resultData={resultData} />
            ) : (
              displayTryAgain ? (
                <div>
                  <button
                    className="rounded-none bg-blue-700 text-white p-2"
                    onClick={tryAgain}
                  >
                    Something went wrong. Try again.
                  </button>
                </div>
              ) : (
                <></>
              )
            )
          }
        </div>
        <br />
      </div>
    </PageLayout>
  )
}
