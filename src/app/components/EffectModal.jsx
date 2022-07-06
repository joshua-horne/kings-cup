import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'

import { QuestionIcon } from '@chakra-ui/icons'

function EffectModal(props) {
  const card = useSelector((state) => state.card)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <QuestionIcon onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.500">
          <Stack>
            <ModalHeader align="center">
              {card.value} - {props.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody align="center">
              <Text fontSize="xl">{props.detail}</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EffectModal
