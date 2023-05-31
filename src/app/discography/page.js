import Image from 'next/image';

import PageLayout from '../components/pageLayout';
import { ALBUMS } from '../album-data';

function PlayRow({ title, link, iconImage }) {
  return (
    <a
      className={
        "flex flex-row justify-center " +
        "p-3 text-md md:text-xl " +
        "hover:bg-sky-100 " +
        "border-t-2 border-slate-100"
      }
      href={link} target="_blank"
    >
      <div className="mr-1">Play on</div>
      <div className="relative w-[80px] h-[24px]">
        <Image
          src={iconImage}
          alt={title}
          fill
        />
      </div>
    </a>
  )
}

export default function Discography() {
  return (
    <PageLayout
      background="bg-gradient-to-b from-slate-100 to-blue-100"
      title="DISCOGRAPHY"
    >
      <div className="p-2">
        {
          ALBUMS.map(({
            title, date, blurb, albumImage, recordHalfImage, spotifyLink, appleMusicLink, youtubeMusicLink
          }, i) => {
            const addMb = i < ALBUMS.length;
            const addedMb = addMb ? " mb-5 md:mb-10" : "";

            return (
              <div key={title} className={"w-full bg-white p-5 md:p-10" + addedMb}>
                <div className="flex flex-row justify-center">
                  <div
                    className={
                      "relative w-[180px] h-[180px] md:w-[280px] md:h-[280px] " +
                      "border-black border-[2px]"
                    }
                  >
                    <Image
                      src={albumImage}
                      alt="album image"
                      fill
                    />
                  </div>
                  <div
                    className={
                      "relative w-[90px] h-[180px] md:w-[140px] md:h-[280px]"
                    }
                  >
                    <Image
                      src={recordHalfImage}
                      alt="album image"
                      fill
                    />
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="font-bold text-base lg:text-xl text-left">
                    {title}
                  </div>
                  <div className="text-justify lg:text-lg mb-1">{blurb}</div>
                  <div className="text-sm text-slate-600">
                    Release date: {date}
                  </div>
                </div>
                <div className="md:m-2"></div>
                <PlayRow title={'Spotify'} link={spotifyLink} iconImage='/spotify_icon_w500.png' />
                <PlayRow title={'Apple Music'} link={appleMusicLink} iconImage='/apple_music_icon_w500.png' />
                <PlayRow title={'YouTube Music'} link={youtubeMusicLink} iconImage='/youtube_music_icon_w500.png' />
              </div>
            )
          })
        }
      </div>
    </PageLayout>
  )
}
