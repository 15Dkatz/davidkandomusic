import { cache, useState, useEffect } from 'react';


const getFollowers = cache(async () => {
  const response = await fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando');
  console.log(`response`, response);

  if (!response.ok) {
    throw new Error('Error fetching followers. Response.ok is false.');
  }

  const json = await response.json();
  console.log(`json`, json);

  if (
    json
    && json.artists
    && json.artists.items
    && json.artists.items.length > 0
  ) {
    return json.artists.items[0].followers.total;
  }

  throw new Error('Error fetching followers. Follower count is unavailable in response json', json);
});

// Always to the nearest 10 power: 100, 1000, 10k, 100k, etc.
const followerGoal = ({ current }) => Math.pow(10, (current+'').length);

export default function Followers() {
  const [goalString, setGoalString] = useState('?/?');

  useEffect(() => {
    getFollowers()
      .then(followers => {
        setGoalString(`${followers}/${followerGoal({ current: followers })}`);
      })
      .catch(error => {
        console.error(`error`, error);
      });
  }, [setGoalString])

  return (
    <div>
      Follower progress: {goalString}
    </div>
  );
}
