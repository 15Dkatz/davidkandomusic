'use client';

import { Suspense, useState, useEffect } from 'react';
import { detectIncognito } from 'detectincognitojs';

const Loading = () => (
  <div className="absolute w-[300px] h-[352px] rounded bg-slate-100 pt-[56px] pl-[60px]">
    <div className="w-[176px] h-[176px] rounded bg-slate-200 animate-pulse" />
  </div>
);

export default function Player({ embed }) {
  const [warningDisplay, setWarningDisplay] = useState(null);

  useEffect(() => {
    // NOTE: Production fix/compromise (compromise because a working `areCookiesEnabled` helper would be superior).
    detectIncognito().then(result => {
      if (result.isPrivate) {
        setWarningDisplay(
          <div className="bg-white p-1 m-1 mt-5 text-sm italic">
            <div>The play button is disabled on private browsers by default.</div>
            <div>{'Try changing your browser settings: Settings > Privacy and security > Cookies'}.</div>
            <div>Or, you can click on the song title, and play on Spotify directly.</div>
          </div>
        )
      }
    });
  }, [setWarningDisplay]);

  return (
    <div className="p-1 flex flex-col items-center">
      <div className="relative w-[300px] h-[352px]">
        <div className="absolute w-[300px] h-[352px]">
          <Suspense fallback={<Loading />}>
            {embed}
          </Suspense>
        </div>
      </div>
      {warningDisplay}
    </div>
  );
}


// TODO: Refactor to check if cookies are enabled. This will implicitly hide the warning when the user enables cookies.
// Note: the following helper method does not work in Chrome. When cookies are blocked, the play button disappears, but this helper function still returns true.
//
// function areCookiesEnabled(){
//   var cookieEnabled = (navigator.cookieEnabled) ? true : false;

//   if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled){
//     document.cookie="testcookie";
//     cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
//   }
//   return cookieEnabled;
// }
