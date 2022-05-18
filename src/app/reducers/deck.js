import { RECEIVE_DECK } from '../actions';

function deck(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECK:
      return action.deck;

    default:
      return state;
  }
}

export default deck;
