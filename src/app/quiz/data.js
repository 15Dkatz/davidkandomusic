export const CRUISER = 'CRUISER';
export const ROCKER = 'ROCKER';
export const ROMANTIC = 'ROMANTIC';
export const THINKER = 'THINKER';

export const PREMISE = `Suddenly the sky cracks with a flash. A winged figure descends upon you. The figure introduces himself, "How's it hanging? I'm the Angel of Music. I have five questions for you. Complete them, and I'll give you a reward."`;

export const QUESTIONS = [
  {
    id: 1,
    question: `First, choose a music genre from the following - whatever is speaking to you, or sparking a feeling:`,
    answers: [
      {
        entry: 'a',
        id: '1a',
        answer: 'Electric riff revolution',
        type: ROCKER
      },
      {
        entry: 'b',
        id: '1b',
        answer: 'Heart-melting rhythmic rumble',
        type: ROMANTIC
      },
      {
        entry: 'c',
        id: '1c',
        answer: 'Mind-blowing multi-instrumental',
        type: THINKER
      },
      {
        entry: 'd',
        id: '1d',
        answer: 'Soul-soaring sonic',
        type: CRUISER
      }
    ]
  },
  {
    id: 2,
    question: 'Next, pick a creature from the musical spirit realm world to guide you:',
    answers: [
      {
        entry: 'a',
        id: '2a',
        answer: '"Mr. Butter", the smooth synth-operating Otter',
        type: ROMANTIC
      },
      {
        entry: 'b',
        id: '2b',
        answer: '"8-hands", the piano-playing Octopus',
        type: THINKER
      },
      {
        entry: 'c',
        id: '2c',
        answer: '"Flame Feathers", the guitar wizard Eagle',
        type: ROCKER
      },
      {
        entry: 'd',
        id: '2d',
        answer: '"Groove Highway", the percussion pro Pony',
        type: CRUISER
      }
    ]
  },
  {
    id: 3,
    question: `Imagine you're becoming a music artist. Come up with your performance alias:`,
    answers: [
      {
        entry: 'a',
        id: '3a',
        answer: 'The Sunwave',
        type: CRUISER
      },
      {
        entry: 'b',
        id: '3b',
        answer: 'The Heartbender',
        type: ROMANTIC
      },
      {
        entry: 'c',
        id: '3c',
        answer: 'The Epiphany',
        type: THINKER
      },
      {
        entry: 'd',
        id: '3d',
        answer: 'The Thunder',
        type: ROCKER
      }
    ]
  },
  {
    id: 4,
    question: `Imagine you're an expert guitarist, which of the following guitar designs would you use?`,
    answers: [
      {
        entry: 'a',
        id: '4a',
        answer: 'A V-shaped electric guitar with an angel-wing design',
        type: CRUISER
      },
      {
        entry: 'b',
        id: '4b',
        answer: 'A rustic acoustic guitar with "this machine kills fascists" written on it',
        type: THINKER
      },
      {
        entry: 'c',
        id: '4c',
        answer: 'A silver double-neck electric guitar with neon strings',
        type: ROCKER
      },
      {
        entry: 'd',
        id: '4d',
        answer: 'A finely-made acoustic guitar with pearl trim',
        type: ROMANTIC
      }
    ]
  },
  {
    id: 5,
    question: `Again, imageine you're an up-and-coming music artist. Choose one band for a week-long mentoring session:`,
    answers: [
      {
        entry: 'a',
        id: '5a',
        answer: 'Queen',
        type: ROMANTIC
      },
      {
        entry: 'b',
        id: '5b',
        answer: 'The Eagles',
        type: CRUISER
      },
      {
        entry: 'c',
        id: '5c',
        answer: 'Led Zeppelin',
        type: ROCKER
      },
      {
        entry: 'd',
        id: '5d',
        answer: 'The Beatles',
        type: THINKER
      }
    ]
  }
];

export const CONCLUSION_PART_1 = `The Angel of Music cracks a smile, satisfied with your answers. "I dig your vibe." he says. "I made this playlist that I think represents you well. This is my gift to you."`

export const RESULT_MAP = {
  [CRUISER]: {
    blurb: 'Your musical personality is like a smooth cruise down the coastal highway. Your songs are those that capture the sweet feeling of an uninhibited spirit.',
    playlistLink: 'https://open.spotify.com/playlist/29ngmUyX5axVriFSTyQy7R?si=825d1a826a5049c2'
  },
  [ROCKER]: {
    blurb: 'Your musical personality is relentless and invigorating, like the energy from hair-rising guitar amps. The sound of your songs crash and screech with a beautiful brand of chaotic musicality.',
    playlistLink: 'https://open.spotify.com/playlist/1njREE782p2UmiVsuKQBu3?si=b57a0e3e7ce84849'
  },
  [ROMANTIC]: {
    blurb: `Your musical personality is warm and buttery. Listening to your music is like drinking the foam heart on a latte. Or it's like a passionate embrace amidst an evening's candlelight.`,
    playlistLink: 'https://open.spotify.com/playlist/3TMHZHFF7hlQbFYCWqbHrt?si=ceaff9f649ba4983'
  },
  [THINKER]: {
    blurb: 'Your musical aura is that of wit and discovery. Your songs traverse the world of ideas, as thought-provoking compositions and meaningful lyrics engage your curious mind.',
    playlistLink: 'https://open.spotify.com/playlist/01vuz1uxoDgn1FpJ5bvYtS?si=7f0cde01cc154252'
  }
};

export const CONCLUSION_PART_2 = `Once again, the sky cracks with a flash. The Angel of Music begins to ascend, "Until we meet again. Hope you enjoy the playlist. Oh, and don't forget to follow my favorite artist on Spotify: David Kando. For real, that guy can do music."`;

// If there is a tie (2-2-1), then choose a random one from the selections with 2 tallies.
// selections should be a map like so:
// {
//   [CRUISER]: numVotes,
//   [ROCKER]: numVotes,
//   [ROMANTIC]: numVotes,
//   [THINKER]: numVotes
// }
// returns the type, such as CRUISER or ROCKER
export const getQuizResult = ({ resultMap }) => {
  // 1: find the max
  const max = Math.max(...Object.values(resultMap));

  // 2: filter the list down to selections that match the max (go directly to the keys, since those are the types)
  const filteredKeys = Object.keys(
    Object.fromEntries(
      Object.entries(resultMap).filter(([_, numVotes]) => numVotes === max)
    )
  );

  // 3: pick a random item from the list
  return filteredKeys[Math.floor(Math.random() * filteredKeys.length)];
}

// Uncomment for tests
// const test1 = getQuizResult({
//   resultMap: {
//     [CRUISER]: 1,
//     [ROCKER]: 1,
//     [ROMANTIC]: 1,
//     [THINKER]: 2
//   }
// });
// console.log(`test1`, test1);

// const test2 = getQuizResult({
//   resultMap: {
//     [CRUISER]: 1,
//     [ROCKER]: 2,
//     [ROMANTIC]: 0,
//     [THINKER]: 2
//   }
// });
// console.log(`test2`, test2);

// const test3 = getQuizResult({
//   resultMap: {
//     [CRUISER]: 1,
//     [ROCKER]: 3,
//     [ROMANTIC]: 0,
//     [THINKER]: 1
//   }
// });
// console.log(`test3`, test3);

// const test4 = getQuizResult({
//   resultMap: {
//     [CRUISER]: 5,
//     [ROCKER]: 0,
//     [ROMANTIC]: 0,
//     [THINKER]: 0
//   }
// });
// console.log(`test4`, test4);
