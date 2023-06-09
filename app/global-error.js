'use client';

import { useEffect } from 'react';

// TODO: Get this to appear, has never appeared
export default function GlobalError({ error, reset }) {
  console.log(`reset`, reset);

  useEffect(() => {
    console.error(`error`, error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}