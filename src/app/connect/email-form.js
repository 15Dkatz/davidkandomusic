'use client';

import { useRef } from 'react';

// TODO: Figure out a way to incorporate Suspense here onSubmit
export default function EmailForm() {
  const formRef = useRef();

  const handleSubmit = async event => {
    console.log(`event`, event);
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

  return (
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
  );
}
