import request from 'superagent';

const rootUrl = 'api/v1';

export function newDeck() {
  return request.get(`${rootUrl}/new`).then((res) => {
    return res.body;
  });
}

export function drawCard(deckId) {
  return request.get(`${rootUrl}/draw/${deckId}`).then((res) => {
    return res.body;
  });
}

export default {
  newDeck,
  drawCard,
};
