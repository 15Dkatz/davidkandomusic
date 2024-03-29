import { PREMISE, QUESTIONS } from '../data';

export default function Page() {
  return (
    <>
      {PREMISE}
      <form action="/quiz/result">
        {
          QUESTIONS.map(
            ({ id: questionId, question, answers }) => (
              <fieldset className="mt-5" key={questionId}>
                <legend>{questionId}{')'} {question}</legend>
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
            )
          )
        }
        <div className="flex justify-center mt-5">
          <button className="bg-blue-700 text-white p-2">
            Submit and get my gift
          </button>
        </div>
      </form>
    </>
  )
}
