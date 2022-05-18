import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
  Stack,
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
      <List spacing={3}>
        {playerList.map((player, i) => {
          return <ListItem key={i}>{player}</ListItem>
        })}
      </List>
      <InputGroup>
        <Input
          type="text"
          id="palyerName"
          placeholder="Add a player"
          value={playerName}
          onChange={(evt) => setName(evt.target.value)}
        />
        <InputRightAddon>
          <PlusSquareIcon m={3} onClick={handleSubmit}>
            +
          </PlusSquareIcon>
        </InputRightAddon>
      </InputGroup>
      <Button m={6} onClick={() => dispatch(firstCard())}>
        Start Game
      </Button>
    </Stack>
  ) : null
}

export default NewGame
