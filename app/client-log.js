'use client';

import { useEffect } from 'react';

export default function ClientLog() {
  // only log once

  useEffect(() => {
    console.log(`
    Hey there coder, digging into the website? Well, you've found an easter egg!
    I actually posted a step-by-step course on rebuilding this website.
    It uses Next.js 13+ and React 18+.
    Take the course, and adapt this website for yourself or a client!
    Check out the course here: https://www.udemy.com/user/54cd8dd54e49b/
  `);
  }, [])

  return <></>;
}
