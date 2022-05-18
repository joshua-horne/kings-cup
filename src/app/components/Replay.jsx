import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { endGame } from '../actions';

function Replay() {
  const kingCounter = useSelector((state) => state.kingCounter);
  const dispatch = useDispatch();

  if (kingCounter == 0)
    return (
      <div>
        <button onClick={() => dispatch(endGame())}>Start Again?</button>
      </div>
    );
  else return null;
}

export default Replay;
