import React from 'react'

import { Box, Container, Heading } from '@chakra-ui/react'

import ErrorMessage from './components/ErrorMessage'
import NewGame from './components/NewGame'
import Game from './components/Game'

function App() {
  return (
    <>
      <Container>
        <Box textAlign={'center'} py={20}>
          <Heading m={3}>Kings Cup</Heading>
          <ErrorMessage />
          <NewGame />
          <Game />
        </Box>
      </Container>
    </>
  )
}

export default App
