import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchEffect, receiveKing } from '../actions';

import Replay from './Replay';

function Card() {
  let [cardEffect, setEffect] = useState('');
  let [activePlayer, setPlayer] = useState(0);

  const card = useSelector((state) => state.card);
  const kingCounter = useSelector((state) => state.kingCounter);
  const playerList = useSelector((state) => state.players);

  const dispatch = useDispatch();

  useEffect(() => {
    setEffect(fetchEffect(card.value));
    //TODO: setPlayer to +1 of active player BUT needs to loop on playerList.length
    setPlayer(playerList[0]);
    if (card.value == 'KING' && kingCounter == 1) {
      setEffect(fetchEffect('FINAL KING'));
      dispatch(receiveKing());
    } else if (card.value == 'KING') dispatch(receiveKing());
  }, [card]);

  return (
    <div>
      <h1>Your turn {playerList[activePlayer]}</h1>
      <img src={card.image} alt="picture of your card" />
      <h1>
        Your Card: The {card.value} of {card.suit}
      </h1>
      <h2>Card Effect: {cardEffect} (more detailed explanation on hover?)</h2>
      <h3>Remaining Cards: {card.remaining}</h3>
      <h3>Remaining Kings: {kingCounter}</h3>
      <h3>Game End Condition and Replay Function (IN DEVELOPMENT)</h3>
      <Replay />
    </div>
  );
}

export default Card;
