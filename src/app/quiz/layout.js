'use client';

import PageLayout from '../components/pageLayout';

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
