import { SHOW_ERROR, BEGIN_GAME, END_GAME } from '../actions';

function running(state = false, action) {
  switch (action.type) {
    case BEGIN_GAME:
      return true;

    case END_GAME:
      return false;

    case SHOW_ERROR:
      return false;

    default:
      return state;
  }
}

export default running;
