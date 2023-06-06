'use client';

import { useRef } from 'react';

import PageLayout from '../components/pageLayout';
import Followers from './followers';

export default function Connect() {
  const formRef = useRef();

  const handleSubmit = async event => {
    event.preventDefault();

    const body = {
      name: event.target.name.value,
      email: event.target.email.value
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      // Without this, the underlying body-parser will not function and turn the stringified body into a usable object
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    console.log(`response`, response);

    const json = await response.json();
    console.log(`json`, json);

    alert(json.message);

    if (response.status === 200) {
      formRef.current.reset();
    }
  }

  // TODO: Implement follower progress. Implement code where the goalpost is always moving to the next digit place. 100/1000/etc.

  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      <div className={"text-md lg:text-xl p-1"}>
        <div>
          Find my latest projects, upcoming live events, and releases!
        </div>
        <br />
        <div>
          1. Support me with a follow on{' '}
          <a className="font-bold link" href="https://open.spotify.com/artist/6ep6Hvwexmaa5IqcPxMxqC?si=t24Vsf6LRsKSIy5lV0wvNw" target="_blank">Spotify</a>.
        </div>
        <div className="ml-5">
          <Followers />
        </div>
        <br />
        <div>
          2. Follow me on{' '}
          <a className="font-bold link" href="https://www.instagram.com/davidkandomusic/" target="_blank">instagram</a>.
        </div>
        <br />
        <div>
          3. Join my email list.
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="p-1 pl-4">
          <div className="m-1">
            <label htmlFor="name" className="w-[40px] md:w-[50px] inline-block">Name{' '}</label>
            <input className="rounded-none" type="text" id="name" name="name" required />
          </div>
          <div className="m-1">
            <label htmlFor="email" className="w-[40px] md:w-[50px] inline-block">Email{' '}</label>
            <input className="rounded-none" type="email" id="email" name="email" required />
          </div>
          <div className="m-1">
            <button className="rounded-none bg-blue-700 text-white p-1" type="submit">
              Submit
            </button>
          </div>
        </form>
        <br />
        <div>
          Reach out for inquiries at <span className="underline">davidkandomusic@gmail.com</span>
        </div>
      </div>
    </PageLayout>
  )
}
