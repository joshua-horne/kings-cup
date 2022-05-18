import { RECEIVE_DECK, RECEIVE_KING } from '../actions';

function kingCounter(state = 4, action) {
  switch (action.type) {
    case RECEIVE_KING:
      return state - 1;

    case RECEIVE_DECK:
      return 4;

    default:
      return state;
  }
}

export default kingCounter;
