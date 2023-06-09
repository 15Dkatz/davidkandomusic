import { lazy } from 'react';

export const POISON_WORMS = 'POISON_WORMS';
export const IN_PERPETUITY = 'IN_PERPETUITY';

export const POISON_WORMS_PARAMS = 'item=poison-worms';
export const IN_PERPETUITY_PARAMS = 'item=in-perpetuity';

export const POISON_WORMS_ID = 'poison-worms';
export const IN_PERPETUITY_ID = 'in-perpetuity';

// TODO: Preserve the following as a demo/teaching version:
// const PoisonWormsLazyPlayer = lazy(
//   () => new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./poison-worms-embed'));
//     }, 5000);
//   })
// );

const PoisonWormsLazyPlayer = lazy(() => import('./poison-worms-embed'));
const InPerpetuityLazyPlayer = lazy(() => import('./in-perpetuity-embed'));

export const RECORDS_MAP = {
  [POISON_WORMS_ID]: {
    id: POISON_WORMS_ID,
    title: 'Poison Worms',
    date: '5/24/23',
    by: 'David Kando',
    blurb: 'A relaxed rock vibe. Listen closely for a wicked theme.',
    pageBackground: `bg-[url('/poison_worms_background.png')] bg-contain`,
    albumImage: '/poison_worms_1000.png',
    recordImage: '/poison_worms_record_full.png',
    recordHalfImage: '/poison_worms_record_half.png',
    spotifyLink: 'https://open.spotify.com/track/7o1sArWvk2m61k6CuZKt93?si=f728d1ee64214102',
    LazyPlayer: PoisonWormsLazyPlayer,
    appleMusicLink: 'https://music.apple.com/us/album/poison-worms/1689163166?i=1689163167',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=Lqdxm7R23c4'
  },
  [IN_PERPETUITY_ID]: {
    id: IN_PERPETUITY_ID,
    title: 'In Perpetuity',
    date: '3/18/23',
    by: 'David Kando',
    blurb: 'A smooth song for cruising and romance. "The road awaits".',
    pageBackground: `bg-[url('/in_perpetuity_background.png')] bg-contain`,
    albumImage: '/in_perpetuity_1000.png',
    recordImage: '/in_perpetuity_record_full.png',
    recordHalfImage: '/in_perpetuity_record_half.png',
    spotifyLink: 'https://open.spotify.com/track/0Qer5Z5ut75UJevgRC8GIK?si=2444d5d5cdcc47f1',
    LazyPlayer: InPerpetuityLazyPlayer,
    appleMusicLink: 'https://music.apple.com/us/album/in-perpetuity/1677926229?i=1677926230',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=XhSBF2_iqL4'
  }
};

// TODO: May be unneeded
export const PARAMS_RECORD_MAP = {
  [POISON_WORMS_PARAMS]: RECORDS_MAP[POISON_WORMS],
  [IN_PERPETUITY_PARAMS]: RECORDS_MAP[IN_PERPETUITY],
}

export const RECORDS = Object.values(RECORDS_MAP);
