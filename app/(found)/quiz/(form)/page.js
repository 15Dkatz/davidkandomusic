import { PREMISE, QUESTIONS } from '../data';

export default function Page() {
  return (
    <>
      {PREMISE}
      <form action="/quiz/result">
        {
          QUESTIONS.map(
            ({ id: questionId, question, answers }, i) => (
              <div className="mt-5" key={questionId}>
                <fieldset>
                  <legend>{i+1}{')'} {question}</legend>
                  {
                    answers.map(({ id: answerId, answer, type }) => (
                      <div key={answerId}>
                        <input
                          id={answerId}
                          type="radio"
                          name={questionId}
                          value={type}
                          required
                        />
                        <label htmlFor={answerId}>{' '}{answer}</label>
                      </div>
                    ))
                  }
                </fieldset>
              </div>
            )
          )
        }
        <div className="text-center mt-5">
          <button className="bg-blue-700 text-white p-2">
            Submit and get my gift
          </button>
        </div>
      </form>
    </>
  )
}
