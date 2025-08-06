import React from 'react';

const EvenPlayers = ([, second, , fourth, , sixth]) => {
  return (
    <ul>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </ul>
  );
};

export default EvenPlayers;
