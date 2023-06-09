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
    youtubeMusicLink: 'https://www.youtube.com/watch?v=Lqdxm7R23c4',
    lyrics: (
      <div className="text:lg md:text-xl text-justify">
        <div>(One, two, three)</div>
        <div>One more nesting outside</div>
        <div>One alive with sapphire feathering</div>
        <div>One birdsong, tune in the morning light</div>
        <div>Tone this time turning somewhat grim</div>
        <div>(Nana-nana-nananana, Nanana-nana-nananana)</div>
        <div>Don&apos;t cry now, sing it real nice</div>
        <div>One more to cover me</div>
        <div>In your rhythm baby</div>
        <br />
        <div>Give me a reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Give me a reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
        <br />
        <div>(Hey)</div>
        <div>One claw on the tree outside</div>
        <div>The other one, stepping in bird heaven</div>
        <div>(Nana-nana-nananana, Nanana-nana-nananana)</div>
        <div>Don&apos;t cry now, sing it real nice</div>
        <div>One more to cover me</div>
        <div>In your rhythm baby</div>
        <br />
        <div>Give me a reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Give me a reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
        <br />
        <div>Hey</div>
        <div>Your rhythm baby</div>
        <div>Am I the reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Am I the reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
        <div>Am I the reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Am I the reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
      </div>
    ),
    gear: (
      <div>
        TODO: Gear Used
      </div>
    )
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
    youtubeMusicLink: 'https://www.youtube.com/watch?v=XhSBF2_iqL4',
    lyrics: (
      <div className="text:lg md:text-xl text-justify">
        <div>Kitchen fire</div>
        <div>Burning mac from the store</div>
        <div>Canine crier</div>
        <div>Playing guard at the door (again)</div>
        <div>My mind mired</div>
        <div>On a one-two bed fantasy</div>
        <div>Where you will endlessly see</div>
        <br />
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>Awaits</div>
        <br />
        <div>On days you&apos;re tired I got</div>
        <div>The theragun, got the stove</div>
        <div>And one day we&apos;re retired</div>
        <div>Saved for that mansion by the shore</div>
        <div>(Today I verbify a life so simple)</div>
        <div>But today we&apos;re apart</div>
        <div>I swear</div>
        <div>It&apos;s not stupidity</div>
        <div>You and me in perpetuity</div>
        <br />
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>Awaits</div>
        <br />
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road (the road awaits)</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road (the road)</div>
        <div>Awaits</div>
      </div>
    ),
    gear: (
      <div>
        TODO: Gear Used
      </div>
    )
  }
};

// TODO: May be unneeded
export const PARAMS_RECORD_MAP = {
  [POISON_WORMS_PARAMS]: RECORDS_MAP[POISON_WORMS],
  [IN_PERPETUITY_PARAMS]: RECORDS_MAP[IN_PERPETUITY],
}

export const RECORDS = Object.values(RECORDS_MAP);

export const SEGMENT_TITLES_MAP = {
  'lyrics': 'Lyrics',
  'gear': 'Gear used'
};
