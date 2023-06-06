'use client';

import PageLayout from '../components/pageLayout';

// TODO: Move to their own component files within this relative directory
// TODO: Refactor to have a /path based approach and a layout at the top level
// Then check if the rare locateIframeInterval bug is still happening when you re-click /quiz (home item) on the results page
// The split up page layering should utilize next.js more properly and avoid the bug
// Refactor with the Next.js api form approach: https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms#part-3-setting-up-a-nextjs-form-api-route

export default function Quiz({ children }) {
  return (
    <PageLayout
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="Playlist Personality Quiz"
    >
      <div className={"text-md lg:text-xl p-1 m-1 mt-2"}>
        {children}
      </div>
    </PageLayout>
  )
}
