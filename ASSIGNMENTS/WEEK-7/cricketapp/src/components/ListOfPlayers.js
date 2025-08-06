import React from 'react';

const ListOfPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>Mr. {player.name} {player.score}</li>
      ))}
    </ul>
  );
};

export default ListOfPlayers;
