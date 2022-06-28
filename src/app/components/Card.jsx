import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'

import { fetchEffect, receiveKing } from '../actions'

import Replay from './Replay'

function Card() {
  const card = useSelector((state) => state.card)
  const kingCounter = useSelector((state) => state.kingCounter)
  const playerList = useSelector((state) => state.players)

  let [cardEffect, setEffect] = useState('')
  let [activeIndex, setIndex] = useState(0)
  let [nextIndex, setNext] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    setEffect(fetchEffect(card.value))

    if (nextIndex == playerList.length - 1) {
      setIndex(activeIndex + 1)
      setNext(0)
    } else if (nextIndex == 0) {
      setIndex(0)
      setNext(nextIndex + 1)
    } else {
      setIndex(activeIndex + 1)
      setNext(nextIndex + 1)
    }

    if (card.value == 'KING' && kingCounter == 1) {
      setEffect(fetchEffect('FINAL KING'))
      dispatch(receiveKing())
    } else if (card.value == 'KING') dispatch(receiveKing())
  }, [card])

  return (
    <Stack>
      <Heading>Your Card {playerList[activeIndex]}!</Heading>
      <Image src={card.image} />
      <Heading>
        Card Effect: {cardEffect} <QuestionIcon />
      </Heading>
      <Text>Remaining Cards: {card.remaining}</Text>
      <Text>Remaining Kings: {kingCounter}</Text>
      <Heading> Next Turn: {playerList[nextIndex]} </Heading>
      <Replay />
    </Stack>
  )
}

export default Card
