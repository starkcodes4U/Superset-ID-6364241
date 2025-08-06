import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import MergedIndianPlayers from './components/MergedIndianPlayers';

function App() {
  const flag = true; // Change to false to test second output

  const players = [
    { name: "Jack", score: 90 },
    { name: "Michael", score: 70 },
    { name: "John", score: 80 },
    { name: "Alex", score: 55 },
    { name: "Mark", score: 68 },
    { name: "Rohit", score: 50 },
    { name: "Virat", score: 95 },
    { name: "Smith", score: 60 },
    { name: "Warner", score: 100 },
    { name: "Rahul", score: 85 },
    { name: "Bumrah", score: 61 }
  ];

  const IndianTeam = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers {...IndianTeam} />
        <h1>Even Players</h1>
        <EvenPlayers {...IndianTeam} />
        <h1>List of Indian Players Merged:</h1>
        <MergedIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
