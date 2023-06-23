'use client';

import { Suspense, useState, useEffect } from 'react';
import Spinner from 'components/spinner';
import { detectIncognito } from 'detectincognitojs';

function Loading() {
  return (
    <div className="w-[300px] h-[352px] bg-slate-100 rounded flex justify-center items-center">
      <Spinner />
    </div>
  )
}

export default function Player({ embed }) {
  const [warningDisplay, setWarningDisplay] = useState(null);

  useEffect(() => {
    // NOTE: Production fix/compromise (compromise because a working `areCookiesEnabled` helper would be superior).
    // Then, this would hide if the user enabled cookies.
    detectIncognito().then(result => {
      if (result.isPrivate) {
        setWarningDisplay(
          <div className="bg-white p-1 m-1 mt-5 text-sm italic">
            <div>The play button is disabled on private browsers by default.</div>
            <div>{'To enable the play button, update your browser settings: Settings > Privacy and security > Cookies'}.</div>
            <div>Or, you can click on the song title, and listen on Spotify directly.</div>
          </div>
        )
      }
    });
  }, [setWarningDisplay]);

  return (
    <>
      <div className="w-[300px] h-[352px]">
        <Suspense fallback={<Loading />}>
          {embed}
        </Suspense>
      </div>
      {warningDisplay}
    </>
  );
}
