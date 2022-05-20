import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '@chakra-ui/react'

import { drawCard } from '../actions'
import Card from './Card'

function Game() {
  const running = useSelector((state) => state.running)
  const deckID = useSelector((state) => state.deck)
  const dispatch = useDispatch()

  return running ? (
    <div>
      <Card />
      <Button
        m={2}
        color={'gray.600'}
        onClick={() => dispatch(drawCard(deckID))}
      >
        Draw Card
      </Button>
    </div>
  ) : null
}

export default Game
