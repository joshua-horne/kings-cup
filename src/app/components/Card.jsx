import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'

import { fetchEffect, receiveKing } from '../actions'

import Replay from './Replay'

function Card() {
  let [cardEffect, setEffect] = useState('')
  let [activePlayer, setPlayer] = useState(0)

  const card = useSelector((state) => state.card)
  const kingCounter = useSelector((state) => state.kingCounter)
  const playerList = useSelector((state) => state.players)

  const dispatch = useDispatch()

  useEffect(() => {
    setEffect(fetchEffect(card.value))
    //TODO: setPlayer to +1 of active player BUT needs to loop on playerList.length
    setPlayer(playerList[0])
    if (card.value == 'KING' && kingCounter == 1) {
      setEffect(fetchEffect('FINAL KING'))
      dispatch(receiveKing())
    } else if (card.value == 'KING') dispatch(receiveKing())
  }, [card])

  return (
    <Stack>
      <Heading>Your Card {activePlayer}!</Heading>
      <Image src={card.image} />
      <Heading>
        Card Effect: {cardEffect} <QuestionIcon />
      </Heading>
      <Text>Remaining Cards: {card.remaining}</Text>
      <Text>Remaining Kings: {kingCounter}</Text>
      <Heading> Next Turn: {activePlayer} </Heading>
      <Replay />
    </Stack>
  )
}

export default Card
