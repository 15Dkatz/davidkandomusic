'use client';

import { useState } from 'react';

import { PREMISE, QUESTIONS } from '../data';

export default function QuizForm() {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => setDisplayForm(!displayForm);

  return (
    <div>
      {PREMISE}
      {
        displayForm ? (
          <div>
            <form action="/quiz/result">
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
                <button className="rounded-none bg-blue-700 text-white p-2 mt-8">
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
              Ok, let&apos;s do this.
            </button>
          </div>
        )
      }
    </div>
  )
}
