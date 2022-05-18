import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Button,
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import cupImg from '../../lib/images/cup.png'

import { firstCard, newPlayer } from '../actions'

function NewGame() {
  let [playerName, setName] = useState('')
  const running = useSelector((state) => state.running)
  const playerList = useSelector((state) => state.players)

  function handleSubmit() {
    dispatch(newPlayer(playerName))
    setName('')
  }

  const dispatch = useDispatch()

  return !running ? (
    <Stack spacing={3}>
      <Image src={cupImg}></Image>
      <Box>
        {playerList.length == 0 ? (
          <Heading>Who wants to play?</Heading>
        ) : (
          <>
            <Heading>Player List</Heading>
            <Wrap boxShadow={'outline'} m={2} p={2} spacing={3}>
              {playerList.map((player, i) => {
                return <WrapItem key={i}>{player}</WrapItem>
              })}
            </Wrap>
          </>
        )}
      </Box>
      <InputGroup>
        <Input
          bgColor={'gray.200'}
          color={'gray.600'}
          type="text"
          id="palyerName"
          placeholder="Add a player"
          value={playerName}
          onChange={(evt) => setName(evt.target.value)}
        />
        <InputRightAddon>
          <PlusSquareIcon color={'gray.600'} onClick={handleSubmit}>
            +
          </PlusSquareIcon>
        </InputRightAddon>
      </InputGroup>
      <Button color={'gray.600'} m={6} onClick={() => dispatch(firstCard())}>
        Start Game
      </Button>
    </Stack>
  ) : null
}

export default NewGame
