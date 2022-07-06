import api from '../api'

export const REQUEST_DECK = 'REQUEST_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const REQUEST_CARD = 'REQUEST_CARD'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const RECEIVE_KING = 'RECEIVE_KING'
export const BEGIN_GAME = 'BEGIN_GAME'
export const END_GAME = 'END_GAME'
export const NEW_PLAYER = 'NEW_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'
export const SHOW_ERROR = 'SHOW_ERROR'

export function requestDeck() {
  return {
    type: REQUEST_DECK,
  }
}

export function requestCard() {
  return {
    type: REQUEST_CARD,
  }
}

export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck: deck.deck_id,
  }
}

export function receiveCard(drawn) {
  return {
    type: RECEIVE_CARD,
    payload: {
      deck: drawn.deck_id,
      code: drawn.cards[0].code,
      image: drawn.cards[0].image,
      value: drawn.cards[0].value,
      suit: drawn.cards[0].suit,
      remaining: drawn.remaining,
    },
  }
}

export function receiveKing() {
  return {
    type: RECEIVE_KING,
  }
}

export function beginGame() {
  return {
    type: BEGIN_GAME,
  }
}

export function endGame() {
  return {
    type: END_GAME,
  }
}

export function newPlayer(name) {
  return {
    type: NEW_PLAYER,
    name: name,
  }
}

export function removePlayer(player) {
  return {
    type: REMOVE_PLAYER,
    name: player,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function firstCard() {
  return (dispatch) => {
    dispatch(requestDeck())
    return api
      .newDeck()
      .then((res) => {
        dispatch(receiveDeck(res))
        dispatch(receiveCard(res))
        dispatch(beginGame())
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function drawCard(deckId) {
  return (dispatch) => {
    dispatch(requestCard())
    return api
      .drawCard(deckId)
      .then((res) => {
        dispatch(receiveCard(res))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchEffect(value) {
  switch (value) {
    case 'ACE':
      return {
        title: 'Waterfall',
        detail:
          'Everyone playing must start drinking. The person who drew this card can stop when they want to, everyone else must wait until the player on their right has finished.',
      }
    case '2':
      return {
        title: 'You',
        detail:
          'Two for you. The player who drew this card can nominate two drinks. Either two drinks to a single player, or one drink each to two players.',
      }
    case '3':
      return {
        title: 'Me',
        detail:
          'Three for me. The player who drew this card must take 3 drinks.',
      }
    case '4':
      return {
        title: 'Whores',
        detail: 'All female players must take a drink.',
      }
    case '5':
      return {
        title: 'House Rules',
        detail:
          'Use this card however you like. For example: Game Card - The player who drew this card will choose a quick game for the group to play, such as a round of "Never Have I Ever...".',
      }
    case '6':
      return { title: 'Dicks', detail: 'All male players must drink.' }
    case '7':
      return {
        title: 'Heaven',
        detail: 'The last player to point up must drink.',
      }
    case '8':
      return {
        title: 'Mate',
        detail:
          'The player who drew this card will choose a mate. When the player drinks, so does their mate and vice versa. You may create a chain of mates.',
      }
    case '9':
      return {
        title: 'Rhyme',
        detail:
          'Bust a rhyme. The player who drew this card will say a sentence and the person to their left will continue with a sentence that rhymes. Whoever takes too long or repeats a rhyme loses the game and must take a drink.',
      }
    case '10':
      return {
        title: 'Categories',
        detail:
          'The player who drew this card will name a category and an example. Moving clockwise, players will continue naming examples from the category until either a player cannot name anything or repeats an example.',
      }
    case 'JACK':
      return {
        title: 'New Rule',
        detail:
          'The player who drew this card can create their own rule which is active until a new Jack is drawn, or the game finishes.',
      }
    case 'QUEEN':
      return {
        title: 'Question Master',
        detail:
          'The player who drew this card is the Question Master. Anyone who answers a question from the Question Master must drink. If the response is "Fuck you Question Master", then the Question Master must drink. There may only be one active Question Master at a time.',
      }
    case 'KING':
      return {
        title: 'CONTRIBUTE TO THE KINGS CUP',
        detail:
          'The player who drew this must donate some of their drink to the Kings Cup. Whoever draws the fourth King will finish the Kings Cup and also the game.',
      }
    case 'FINAL KING':
      return {
        title: 'YOU HAVE DRAWN THE FINAL KING! CHEERS!!',
        detail:
          'YOU MUST DRINK THE ENTIRE CONTENTS OF THE KINGS CUP. GAME OVER.',
      }
    default:
      return {
        title: 'Not Found',
        detail:
          'You have somehow drawn a card that does not exist. Impressive. Take a drink.',
      }
  }
}
