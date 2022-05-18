import React from 'react';

import ErrorMessage from './components/ErrorMessage';
import NewGame from './components/NewGame';
import Game from './components/Game';

function App() {
  return (
    <>
      <h1>Kings Cup</h1>
      <ErrorMessage />
      <NewGame />
      <Game />
    </>
  );
}

export default App;
