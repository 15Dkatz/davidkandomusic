'use client';

import PageLayout from '../components/pageLayout';

export default function Quiz() {
  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      // background="bg-[url('/goofy_bg_500_op_80.png')] bg-contain"
      title="Playlist Personality Quiz"
    >
      <div className={"text-md lg:text-xl p-1"}>
        Take the quiz. Get your playlist.
      </div>
    </PageLayout>
  )
}
