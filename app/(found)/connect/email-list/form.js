'use client';

import { useTransition, useRef, useState } from 'react';
import postContact from './post-contact';
import Spinner from 'components/spinner';

export default function Form() {
  const formRef = useRef();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  console.log(`isPending`, isPending);

  const handleSubmit = (data) => {
    console.log(`data`, data);
    const name = data.get('name');
    const email = data.get('email');

    // startTransition, in the callback function, will only mark synchronous state `set` calls as transitions
    // setMessage and setDisplayMessage are marked as transitions that can be interrupted.
    // For example, navigate to another page during the transition.
    // A setTimeout does not work, but postContact works because the awaits in the async postContact make
    // the normally asynchronous fetch execution effectively synchronous.
    // TODO: Come up with a fake example that works
    startTransition(() => {
      postContact({ name, email })
        .then(response => {
          const { status, message } = response;
          setMessage(message);
          setDisplayMessage(true);

          if (status === 200) {
            // only clear on success. Fails should save the user's progress.
            formRef.current.reset();
          }
        });
    });
  };

  return (
    <div className="indent">
      <form ref={formRef} action={handleSubmit} className="grid gap-[2px] w-[220px]">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <button
          className={
            `bg-blue-700 text-center text-white w-[120px] h-[36px] mt-[4px]
            disabled:bg-slate-50 disabled:text-slate-500`
          }
          type="submit"
          disabled={isPending}
        >
          {
            isPending ? (
              <span className="flex justify-center items-center h-[36px] pl-[4px]">
                <Spinner />{' Sending'}
              </span>
            ) : (
              'Submit'
            )
          }
        </button>
      </form>
      {
        displayMessage ? (
          <div className="mt-2">
            {message}{' '}
          </div>
        ) : <></>
      }
    </div>
  );
}
