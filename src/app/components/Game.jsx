import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { drawCard } from '../actions';
import Card from './Card';

function Game() {
  const running = useSelector((state) => state.running);
  const deckID = useSelector((state) => state.deck);
  const dispatch = useDispatch();

  return running ? (
    <div>
      <button onClick={() => dispatch(drawCard(deckID))}>Draw Card</button>
      <Card />
    </div>
  ) : null;
}

export default Game;
