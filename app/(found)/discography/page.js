'use client';

import { useDeferredValue, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RECORDS } from 'app/(found)/record/[id]/data';

function PlayRow({ title, link, iconImage }) {
  return (
    <a
      className={
        `flex flex-row justify-center p-3 text-md lg:text-xl
      hover:bg-sky-100 border-t-2 border-slate-100`
      }
      href={link} target="_blank"
    >
      <div className="mr-1">Play on</div>
      <div className="relative w-[80px] h-[24px]" href={`/`}>
        <Image
          src={iconImage}
          alt={title}
          fill
          sizes="80px"
        />
      </div>
    </a>
  )
}

// use useDeferredValue here, and have a search bar.
// Highlight the matching text in the record title.

const titleDisplay = ({ deferredText, title }) => {
  if (
    deferredText.length > 0
    && title.toLowerCase().includes(deferredText.toLowerCase())
  ) {
    const splitTitle = title.toLowerCase().split(deferredText.toLowerCase());
    // console.log(`splitTitle`, splitTitle);

    // Don't return the splits directly, need to preserve capitalization
    const title1 = title.slice(0, splitTitle[0].length);
    const title2 = title.slice(splitTitle[0].length, splitTitle[0].length+deferredText.length);
    const title3 = title.slice(splitTitle[0].length+deferredText.length, title.length);
    // console.log(`title1`, title1);
    // console.log(`title2`, title2);
    // console.log(`title3`, title3);

    return (
      <>
        <span>{title1}</span>
        <span className="font-bold text-blue-800">{title2}</span>
        <span>{title3}</span>
      </>
    )
  }

  return <span>{title}</span>;
}

// TODO: Try to optimize this for the sake of the course
export default function Discography() {
  const [text, setText] = useState('');
  const [records, setRecords] = useState(RECORDS);
  const deferredText = useDeferredValue(text);

  // console.log(`deferredText`, deferredText);

  useEffect(() => {
    const filteredRecords = RECORDS.filter(
      record => record.title.toLowerCase().includes(deferredText.toLowerCase())
    );

    setRecords(deferredText.length > 0 ? filteredRecords : RECORDS);
  }, [deferredText]);

  return (
    // min-h-screen on the wrapper prevents the filtering from collapsing this bottom section abruptly/harshly
    <div className="min-h-screen">
      <div className="discography-panel text-center">
        <label>
          <div className="mb-2">Search for a record</div>
          <input
            type="text"
            className="rounded-none w-full border-slate-400 border-[2px]"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </label>
      </div>
      <br />
      {
        records.length > 0 ? (
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
          }, i) => {
            const addBr = i < RECORDS.length ? 'mb-8' : '';

            return (
              <>
                <div key={title} className="discography-panel">
                  <div className="flex flex-row justify-center">
                    <Link
                      className={
                        `relative w-[180px] h-[180px] lg:w-[280px] lg:h-[280px]
                        border-black border-[2px]`
                      }
                      href={`/record/${id}`}
                    >
                      <Image
                        src={albumImage}
                        alt="album-image"
                        fill
                        // 768px is the breaking point for tailwind css `lg:`
                        // max-width in Next.js sizes refers to a max-width to apply a smaller value.
                        // Then in larger widths, the final value is the default.
                        // This is an opposite mindset to tailwind where the default is the smallest value, and sm:/lg:/lg: establish breaking points to apply larger values.
                        sizes="(max-width:768px) 90px, 140px"
                        // uncomment to find warnings on Largest Contentful Paint: https://nextjs.org/docs/pages/api-reference/components/image#priority
                        priority
                      />
                    </Link>
                    <div className={"relative w-[90px] h-[180px] lg:w-[140px] lg:h-[280px]"}>
                      <Image
                        src={recordHalfImage}
                        alt="album-image"
                        fill
                        sizes="(max-width:768px) 90px, 140px"
                      />
                    </div>
                  </div>
                  <div className="mb-5 mt-5">
                    <div className="font-bold text-left lg:text-xl">
                      {titleDisplay({ deferredText, title })}
                    </div>
                    <div className="text-justify lg:text-lg mb-1">{blurb}</div>
                    <div className="text-sm text-slate-600">
                      Release date: {date}
                    </div>
                  </div>
                  <PlayRow
                    title={'Spotify'}
                    link={spotifyLink}
                    iconImage='/spotify_icon_w500.png'
                  />
                  <PlayRow
                    title={'Apple Music'}
                    link={appleMusicLink}
                    iconImage='/apple_music_icon_w500.png'
                  />
                  <PlayRow
                    title={'YouTube Music'}
                    link={youtubeMusicLink}
                    iconImage='/youtube_music_icon_w500.png'
                  />
                </div>
                {addBr ? <br /> : <></>}
              </>
            )
          })
        ) : (
          <div className="discography-panel">
            <div className="text-center">No match.</div>
          </div>
        )
      }
    </div>
  )
}
