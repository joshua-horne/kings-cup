import { combineReducers } from 'redux';

import errorMessage from './errorMessage';
import running from './running';
import deck from './deck';
import card from './card';
import kingCounter from './kingCounter';
import players from './players';

export default combineReducers({
  errorMessage,
  running,
  deck,
  card,
  kingCounter,
  players,
});
