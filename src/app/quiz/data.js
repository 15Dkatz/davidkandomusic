export const CRUISER = 'CRUISER';
export const ROCKER = 'ROCKER';
export const ROMANTIC = 'ROMANTIC';
export const THINKER = 'THINKER';

export const QUESTIONS = [
  {
    question: 'First, choose a music genre that represents you. Even if you haven’t heard of these whacky genres, pick whatever is speaking to you, or is sparking a feeling:',
    answers: [
      {
        entry: 'a',
        answer: 'Electric riff revolution',
        type: ROCKER
      },
      {
        entry: 'b',
        answer: 'Heart-melting rhythmic rumble',
        type: ROMANTIC
      },
      {
        entry: 'c',
        answer: 'Mind-blowing multi-instrumental',
        type: THINKER
      },
      {
        entry: 'd',
        answer: 'Soul-soaring sonic',
        type: CRUISER
      }
    ]
  },
  {
    question: 'Next, pick a musical creature from the spirit realm world to guide you:',
    answers: [
      {
        entry: 'a',
        answer: '"Mr. Butter" the Otter, the smooth synth operator',
        type: ROMANTIC
      },
      {
        entry: 'b',
        answer: '"8-hands" the Octopus, the piano-playing aficionado',
        type: THINKER
      },
      {
        entry: 'c',
        answer: '"Freedom Feathers" the Eagle, the electric amp expert',
        type: ROCKER
      },
      {
        entry: 'd',
        answer: '"Groove Highway" the Stallion, the percussion professional',
        type: CRUISER
      }
    ]
  },
  {
    question: 'Imagine you’ve decided to become a music artist. Come up with your performance alias:',
    answers: [
      {
        entry: 'a',
        answer: 'The Sunwave',
        type: CRUISER
      },
      {
        entry: 'b',
        answer: 'The Heartbender',
        type: ROMANTIC
      },
      {
        entry: 'c',
        answer: 'The Epiphany',
        type: THINKER
      },
      {
        entry: 'd',
        answer: 'The Thunder',
        type: ROCKER
      }
    ]
  },
  {
    question: 'If you were an expert guitarist, which of the following guitar designs would you use?',
    answers: [
      {
        entry: 'a',
        answer: 'A V-shaped electric guitar with an angel-wing design',
        type: CRUISER
      },
      {
        entry: 'b',
        answer: 'A rustic acoustic guitar with “this machine kills fascists“ written on it',
        type: THINKER
      },
      {
        entry: 'c',
        answer: 'A red double-neck electric guitar - you play twice as hard as average',
        type: ROCKER
      },
      {
        entry: 'd',
        answer: 'A finely-made acoustic guitar with pearl trim and roses engraved along the body',
        type: ROMANTIC
      }
    ]
  },
  {
    question: 'Say you are an up-and-coming music artist. Choose one band for a week-long mentoring session:',
    answers: [
      {
        entry: 'a',
        answer: 'Queen',
        type: ROMANTIC
      },
      {
        entry: 'b',
        answer: 'The Eagles',
        type: CRUISER
      },
      {
        entry: 'c',
        answer: 'Led Zeppelin',
        type: ROCKER
      },
      {
        entry: 'd',
        answer: 'The Beatles',
        type: THINKER
      }
    ]
  }
];

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
    blurb: 'Your musical personality is warm and buttery. Listening to your music is like drinking the foam heart on a latte. Or it’s like a passionate embrace amidst an evening’s candlelight.',
    playlistLink: 'https://open.spotify.com/playlist/3TMHZHFF7hlQbFYCWqbHrt?si=ceaff9f649ba4983'
  },
  [THINKER]: {
    blurb: 'Your musical aura is that of wit and discovery. Your songs traverse the world of ideas, as thought-provoking compositions and meaningful lyrics engage your curious mind.',
    playlistLink: 'https://open.spotify.com/playlist/01vuz1uxoDgn1FpJ5bvYtS?si=7f0cde01cc154252'
  }
};

// TODO: Return a result from the result map based on the selections. (tally up the player's selections)
// If there is a tie (2-2-1), then choose a random one from the selections with 2 tallies.
export const GetQuizResult = ({ selections }) => {

}