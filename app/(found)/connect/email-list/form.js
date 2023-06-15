'use client';

import { useTransition, useRef } from 'react';
import postContact from './post-contact';

const Spinner = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
)

export default function Form() {
  const formRef = useRef();
  const [isPending, startTransition] = useTransition();

  console.log(`isPending`, isPending);

  const handleSubmit = (...args) => {
    startTransition(() => {
      postContact(...args)
        .then(response => {
          const { status, message } = response;
          alert(message);

          if (status === 200) {
            // only clear on success. Fails should save the user's progress.
            formRef.current.reset();
          }
        })
        .catch(error => {
          console.error(error);
          alert('Subscription service unavailable. Try again or email davidkandomusic@gmail.com to subscribe manually.');
        });
    });
  };

  return (
    <form ref={formRef} action={handleSubmit} className="p-1 pl-4">
      <div className="m-1">
        <label htmlFor="name" className="w-[40px] lg:w-[50px] inline-block">Name{' '}</label>
        <input className="rounded-none" type="text" id="name" name="name" required />
      </div>
      <div className="m-1">
        <label htmlFor="email" className="w-[40px] lg:w-[50px] inline-block">Email{' '}</label>
        <input className="rounded-none" type="email" id="email" name="email" required />
      </div>
      <div className="m-1 mt-2">
        <button
          className={
            `flex justify-center items-center rounded-none bg-blue-700 text-white
            p-[4px] w-[120px] h-[36px] text-lg
            disabled:bg-slate-50 disabled:text-slate-500`
          }
          type="submit"
          disabled={isPending}
        >
          {
            isPending ? (
              <>
                <span className="ml-[5px]"><Spinner /></span>
                {' Sending...'}
              </>
            ) : (
              'Submit'
            )
          }
        </button>
      </div>
    </form>
  );
}
