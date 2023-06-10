// TODO: It'd be nice to take advantage of the error boundary without having to wrap around the entire page.
// see: https://nextjs.org/docs/app/building-your-application/routing/error-handling

'use client';

// TODO: Is this even used? Can I delete the error files?
export default function ConnectError({ error, reset }) {
  console.log(`error`, error);

  return (
    <div>
      <div>
        Something went wrong.
      </div>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}