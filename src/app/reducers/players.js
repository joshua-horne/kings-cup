import { END_GAME, NEW_PLAYER } from '../actions';

function players(state = [], action) {
  switch (action.type) {
    case NEW_PLAYER:
      return [...state, action.name];

    case END_GAME:
      return [];

    default:
      return state;
  }
}

export default players;
