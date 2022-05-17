import React from 'react';
import createRoot from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

createRoot.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
