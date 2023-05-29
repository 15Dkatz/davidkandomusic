import Image from 'next/image';

import PageLayout from '../components/pageLayout';

// `by` will differentiate between David Kando, Curcio, and others I collaborate with
const ALBUMS = [
  {
    title: 'Poison Worms',
    date: '5/24/23',
    by: 'David Kando',
    blurb: 'A relaxed rock vibe. Listen more closely for a wicked theme.',
    albumImage: '/poison_worms_1000.png',
    recordImage: '/poison_worms_record_full.png',
    spotifyLink: 'https://open.spotify.com/track/7o1sArWvk2m61k6CuZKt93?si=f728d1ee64214102',
    appleMusicLink: 'https://music.apple.com/us/album/poison-worms/1689163166?i=1689163167',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=Lqdxm7R23c4'
  },
  {
    title: 'In Perpetuity',
    date: '3/18/23',
    by: 'David Kando',
    blurb: 'A smooth song for cruising and romance. "The road awaits".',
    albumImage: '/in_perpetuity_1000.png',
    recordImage: '/in_perpetuity_record_full.png',
    spotifyLink: 'https://open.spotify.com/track/0Qer5Z5ut75UJevgRC8GIK?si=2444d5d5cdcc47f1',
    appleMusicLink: 'https://music.apple.com/us/album/in-perpetuity/1677926229?i=1677926230',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=XhSBF2_iqL4'
  }
];

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
    <PageLayout background="bg-gradient-to-b from-slate-100 to-blue-100">
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
                    "relative w-[130px] h-[130px] m-[4px] md:w-[240px] md:h-[240px] md:m-[10px] " +
                    "border-black border-2 m-2"
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

            return (
              <div key={title} className={"w-full rounded-sm bg-white p-1" + additionalClassnames}>
                <div className="">
                  {
                    i%2 === 0 ? (
                      // LEFT oriented
                      <div className="flex flex-row justify-center w-[310px] md:w-[550px]">
                        {albumPane}
                        <div className="w-[10px]"></div>
                        {descriptionPane}
                      </div>
                    ) : (
                      // RIGHT oriented
                      <div className="flex flex-row justify-center w-[310px] md:w-[550px]">
                        {descriptionPane}
                        <div className="w-[10px]"></div>
                        {albumPane}
                      </div>
                    )
                  }
                </div>
                <div className="m-2"></div>
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
