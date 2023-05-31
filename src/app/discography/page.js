import Image from 'next/image';

import PageLayout from '../components/pageLayout';
import { ALBUMS } from '../album-data';

function PlayRow({ title, link, iconImage }) {
  return (
    <a
      className={
        "flex flex-row justify-center " +
        "p-3 text-lg md:text-xl " +
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
            title, date, blurb, albumImage, recordImage, spotifyLink, appleMusicLink, youtubeMusicLink
          }, i) => {
            const addMb = i < ALBUMS.length;
            const additionalClassnames = addMb ? " mb-5 md:mb-10" : "";

            const albumPane = (
              <div className="w-[141px] h-[171px] md:w-[240px] md:h-[240px]">
                <div
                  className={
                    "relative w-[140px] h-[140px] md:w-[240px] md:h-[240px] " +
                    "border-black border-2"
                  }
                >
                  <Image
                    src={albumImage}
                    alt="album image"
                    fill
                  />
                </div>
              </div>
            );

            const descriptionPane = (
              <div className={
                  "w-[141px] h-[171px] m-[4px] md:w-[240px] md:h-[240px] md:m-[10px] " +
                  "flex flex-col items-center justify-center"
                }
              >
                {/* show the full record UI here. Display none in mobile. */}
                <div
                  className={
                    "relative block w-[60px] h-[60px] md:w-[120px] md:h-[120px] " +
                    "mb-[10px]"
                  }
                >
                  <Image
                    src={recordImage}
                    alt="record image"
                    fill
                  />
                </div>
                <div className="font-bold text-base md:text-lg text-left w-full">
                  {title} <span className="text-[10px] md:text-[14px] text-slate-600">{date}</span>
                </div>
                <div className="text-justify text-xs md:text-base">
                  {blurb}
                </div>
              </div>
            );

            const divider = (<div className="w-2 md:w-3" />);

            return (
              <div key={title} className={"w-full bg-white p-1" + additionalClassnames}>
                <div className="flex flex-row items-center justify-center w-[310px] md:w-[550px]">
                  {
                    i%2 === 0 ? (
                      // LEFT oriented
                      <>
                        {albumPane}
                        {divider}
                        {descriptionPane}
                      </>
                    ) : (
                      // RIGHT oriented
                      <>
                        {descriptionPane}
                        {divider}
                        {albumPane}
                      </>
                    )
                  }
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
