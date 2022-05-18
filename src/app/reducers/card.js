import { RECEIVE_CARD } from '../actions';

function card(state = [], action) {
  switch (action.type) {
    case RECEIVE_CARD:
      return action.payload;

    default:
      return state;
  }
}

export default card;
