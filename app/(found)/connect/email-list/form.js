'use client';

import { useTransition, useState } from 'react';
import postContact from './post-contact';
import Spinner from 'components/spinner';

export default function Form() {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isPending, startTransition] = useTransition();
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
    startTransition(() => {
      let message;

      postContact({ name, email })
        .then(json => {
          console.log(`json`, json);
          const errorMessage = json.ErrorMessage;

          if (json.Count > 0) {
            // only clear on success. Fails should save the user's progress.
            message = 'Success! Keep an eye on your inbox for updates.'
          } else if (errorMessage && errorMessage.includes('already exists')) {
            message = 'Email is already subscribed.';
          } else if (errorMessage && errorMessage.includes('properties invalid')) {
            message = 'Email is not formatted correctly.'
          } else {
            message = 'Error. Try again or email davidkandomusic@gmail.com to subscribe manually.';
          }

          setMessage(message);
          setDisplayMessage(true);
        })
        .catch(error => {
          console.error(`error`, error);
          setMessage('Error. Try again or email davidkandomusic@gmail.com to subscribe manually.');
          setDisplayMessage(true);
        });
    });
  };

  return (
    <form action={handleSubmit} className="indent grid gap-[2px] w-[270px]">
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
            <span className="flex justify-center items-center h-[36px]">
              <Spinner />Sending
            </span>
          ) : (
            'Submit'
          )
        }
      </button>
      {displayMessage ? message : <></>}
    </form>
  );
}
