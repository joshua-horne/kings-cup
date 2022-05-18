import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { firstCard, newPlayer } from '../actions';

function NewGame() {
  let [playerName, setName] = useState('');
  const running = useSelector((state) => state.running);
  const playerList = useSelector((state) => state.players);

  function handleSubmit() {
    dispatch(newPlayer(playerName));
    setName('');
  }

  const dispatch = useDispatch();

  return !running ? (
    <div>
      <label htmlFor="playerName">Enter Player Names: </label>
      <input
        type="text"
        id="palyerName"
        value={playerName}
        onChange={(evt) => setName(evt.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {playerList.map((player, i) => {
          return <li key={i}>{player}</li>;
        })}
      </ul>
      <button onClick={() => dispatch(firstCard())}>New Game</button>
    </div>
  ) : null;
}

export default NewGame;
