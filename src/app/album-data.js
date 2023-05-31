// `by` will differentiate between David Kando, Curcio, and others I collaborate with
export const POISON_WORMS = 'POISON_WORMS';
export const IN_PERPETUITY = 'IN_PERPETUITY';

export const POISON_WORMS_PARAMS = 'item=poison-worms';
export const IN_PERPETUITY_PARAMS = 'item=in-perpetuity';

const PoisonWormsEmbeddedPlayer = () => (
  <iframe
    src="https://open.spotify.com/embed/track/7o1sArWvk2m61k6CuZKt93?utm_source=generator"
    width="100%"
    height="352"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
);

const InPerpetuityEmbeddedPlayer = () => (
  <iframe
    src="https://open.spotify.com/embed/track/0Qer5Z5ut75UJevgRC8GIK?utm_source=generator"
    width="100%"
    height="352"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
);

export const ALBUMS_MAP = {
  POISON_WORMS: {
    title: 'Poison Worms',
    date: '5/24/23',
    by: 'David Kando',
    blurb: 'A relaxed rock vibe. Listen closely for a wicked theme.',
    albumImage: '/poison_worms_1000.png',
    recordImage: '/poison_worms_record_full.png',
    spotifyLink: 'https://open.spotify.com/track/7o1sArWvk2m61k6CuZKt93?si=f728d1ee64214102',
    appleMusicLink: 'https://music.apple.com/us/album/poison-worms/1689163166?i=1689163167',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=Lqdxm7R23c4',
    EmbeddedPlayer: PoisonWormsEmbeddedPlayer
  },
  IN_PERPETUITY: {
    title: 'In Perpetuity',
    date: '3/18/23',
    by: 'David Kando',
    blurb: 'A smooth song for cruising and romance. "The road awaits".',
    albumImage: '/in_perpetuity_1000.png',
    recordImage: '/in_perpetuity_record_full.png',
    spotifyLink: 'https://open.spotify.com/track/0Qer5Z5ut75UJevgRC8GIK?si=2444d5d5cdcc47f1',
    appleMusicLink: 'https://music.apple.com/us/album/in-perpetuity/1677926229?i=1677926230',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=XhSBF2_iqL4',
    EmbeddedPlayer: InPerpetuityEmbeddedPlayer
  }
};

export const PARAMS_ALBUM_MAP = {
  [POISON_WORMS_PARAMS]: ALBUMS_MAP[POISON_WORMS],
  [IN_PERPETUITY_PARAMS]: ALBUMS_MAP[IN_PERPETUITY],
}

export const ALBUMS = Object.values(ALBUMS_MAP);
