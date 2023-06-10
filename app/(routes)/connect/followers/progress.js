'use client';

import { useState, useEffect } from 'react';
import getFollowers from './get-followers';

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
    <div className="ml-5">
      Follower progress: {goalString}
    </div>
  );
}
