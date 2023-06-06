// Fetch from followers api
// request: https://spotify-api-wrapper.appspot.com/artist/david-kando
// [] write davidkandomusic.com as an exception to the rate-limiting middleware, also need to try deploying with davidkandomusic.com as the domain for this to work

const getFollowers = async () => {
  const response = await fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando');
  const json = await response.json();

  if (
    json
    && json.artists
    && json.artists.items
    && json.artists.items.length > 0
  ) {
    return json.artists.items[0].followers.total;
  }

  return new Error('Could not fetch followers for david-kando');
};

// up to a billion, haha
// TODO: Gotta be a better math way to code this, such as multiplying by 10 and finding the next nearest digit
const followerGoal = ({ current }) => {
  if (!current) return 0;

  if (current < 100) return 100;
  if (current < 1000) return 1000;
  if (current < 10000) return 10000;
  if (current < 100000) return 100000;
  if (current < 1000000) return 1000000;
  if (current < 10000000) return 10000000;
  if (current < 100000000) return 100000000;
  if (current < 1000000000) return 1000000000;
}

export default async function Followers() {
  let followers;

  try {
    followers = await getFollowers();
  } catch (error) {
    console.error(`error`, error);
  }

  const goal = followerGoal({ current: followers });

  return (
    followers > 0 ? (
      <div>
        Follower progress: {followers}/{goal}
      </div>
    ) : (
      <div>
        Error fetching followers. In the meantime, check out <a href="https://open.spotify.com/artist/6ep6Hvwexmaa5IqcPxMxqC?si=qY9-ObwmQzikC-T7mB-WGw" target="_blank" className="link">David Kando on Spotify.</a>
      </div>
    )
  );
}
