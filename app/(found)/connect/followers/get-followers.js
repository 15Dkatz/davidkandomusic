'use server';
// NOTE: Notice that the logs on the server show `cache: HIT`
export default async function getFollowers() {
  const response = await fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando');
  // console.log(`response`, response);

  if (!response.ok) {
    throw new Error('Error fetching followers. Response.ok is false.');
  }

  const json = await response.json();
  // console.log(`json`, json);

  if (
    json
    && json.artists
    && json.artists.items
    && json.artists.items.length > 0
  ) {
    return json.artists.items[0].followers.total;
  }

  throw new Error('Error fetching followers. Follower count is unavailable in response json', json);
};
