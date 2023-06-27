'use client';

import { useState, useEffect, memo, useDeferredValue } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RECORDS } from 'app/(found)/record/[id]/data';

function PlayRow({ title, href, iconImage }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row justify-center p-3 hover:bg-sky-100 border-t-[2px] border-slate-200"
    >
      <span className="mr-1">Play on</span>
      <span className="relative w-[80px] h-[24px]">
        <Image src={iconImage} alt={title} fill sizes="80px" />
      </span>
    </a>
  )
}

const titleDisplay = ({ deferredText, title }) => {
  if (
    deferredText.length > 0
    && title.toLowerCase().includes(deferredText.toLowerCase())
  ) {
    const splitTitle = title.toLowerCase().split(deferredText.toLowerCase());
    // console.log(`splitTitle`, splitTitle);

    // Don't return the splits directly, create slices of the original title to maintain original capitalization
    const title1 = title.slice(0, splitTitle[0].length);
    const title2 = title.slice(splitTitle[0].length, splitTitle[0].length+deferredText.length);
    const title3 = title.slice(splitTitle[0].length+deferredText.length, title.length);
    // console.log(`title1`, title1);
    // console.log(`title2`, title2);
    // console.log(`title3`, title3);

    return (
      <div>
        <span>{title1}</span>
        {/* title2 is always highlighted */}
        <span className="font-bold text-blue-800">{title2}</span>
        <span>{title3}</span>
      </div>
    )
  }

  return title;
}

const Records = memo(function Records({ records, deferredText }) {
  if (records.length > 0) {
    return (
      records.map(({
        id,
        title,
        date,
        blurb,
        albumImage,
        recordHalfImage,
        spotifyLink,
        appleMusicLink,
        youtubeMusicLink
      }) => {
        return (
          <div key={id}>
            <div className="discography-panel text-left">
              <Link href={`/record/${id}`} className="flex flex-row justify-center">
                <div className="relative w-[180px] h-[180px] lg:w-[256px] lg:h-[256px]">
                  <Image
                    src={albumImage}
                    alt="album image"
                    fill
                    // 1024px is the breaking point for tailwind css `lg:`
                    // max-width in Next.js sizes refers to a max-width to apply a smaller value.
                    // Then in larger widths, the final value is the default.
                    // This is an opposite mindset to tailwind where the default is the smallest value, and sm:/lg:/lg: establish breaking points to apply larger values.
                    sizes="(max-width:1024px) 180px, 256px"
                    // comment out priority to find warnings on Largest Contentful Paint: https://nextjs.org/docs/pages/api-reference/components/image#priority
                    priority
                  />
                </div>
                <div className="relative w-[90px] h-[180px] lg:w-[128px] lg:h-[256px]">
                  <Image
                    src={recordHalfImage}
                    alt="record half image"
                    fill
                    sizes="(max-width:1024px) 90px, 128px"
                  />
                </div>
              </Link>
              <br />
              {titleDisplay({ deferredText, title })}
              <div className="text-justify text-md lg:text-lg">{blurb}</div>
              <div className="text-sm text-slate-600">Release date: {date}</div>
              <br />
              <PlayRow
                title="Spotify"
                href={spotifyLink}
                iconImage="/spotify_icon_500.png"
              />
              <PlayRow
                title="Apple Music"
                href={appleMusicLink}
                iconImage="/apple_music_icon_500.png"
              />
              <PlayRow
                title="YouTube Music"
                href={youtubeMusicLink}
                iconImage="/youtube_music_icon_500.png"
              />
            </div>
            <br />
          </div>
        )
      })
    )
  }

  return <div className="discography-panel text-center">No match.</div>;
});

export default function Page() {
  const [text, setText] = useState('');
  const [records, setRecords] = useState(RECORDS);
  const deferredText = useDeferredValue(text);
  // console.log(`deferredText`, deferredText);

  useEffect(() => {
    const filteredRecords = RECORDS.filter(
      record => record.title.toLowerCase().includes(deferredText.toLowerCase())
    );

    setRecords(filteredRecords);
  }, [deferredText]);

  return (
    // min-h-screen on the wrapper prevents the filtering from collapsing this bottom section abruptly/harshly
    <div className="min-h-screen">
      <div className="discography-panel text-center">
        <div className="mb-2">Search for a record</div>
        <input
          type="text"
          className="w-full border-slate-200 border-[2px]"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </div>
      <br />
      <Records records={records} deferredText={deferredText} />
    </div>
  )
}
