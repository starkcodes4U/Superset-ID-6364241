import React from 'react';

const ScoreBelow70 = ({ players }) => {
  const players70 = players.filter((item) => item.score < 70);
  return (
    <ul>
      {players70.map((player, index) => (
        <li key={index}>Mr. {player.name} {player.score}</li>
      ))}
    </ul>
  );
};

export default ScoreBelow70;
