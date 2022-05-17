import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import { Button } from '@chakra-ui/react';

import Welcome from './components/Welcome/Welcome';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <Welcome />
        <p>
          <Button
            colorScheme="red"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
}

export default App;
