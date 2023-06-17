'use client';

import { useState, useEffect } from 'react';
import getFollowers from './get-followers';

// NOTE: return the nearest power-of-10 based on current's number of digits: 100, 1000, 10k, 100k, etc.
const followerGoal = ({ current }) => Math.pow(10, (current+'').length);

export default function Followers() {
  const [goalString, setGoalString] = useState('?/?');

  useEffect(() => {
    getFollowers()
      .then(followers => {
        setGoalString(`${followers}/${followerGoal({ current: followers })}`);
      })
      .catch(error => console.error(error));
  }, [setGoalString])

  // the simplicity of the loading state avoids the necessity for Suspense
  return (
    <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
      Follower progress: {goalString}
    </div>
  );
}
