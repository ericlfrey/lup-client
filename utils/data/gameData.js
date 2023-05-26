import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getGameById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getGameByGameType = (GameTypeId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games?type=${GameTypeId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createGame = (game, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateGame = (game) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${game.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  })
    // .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`, {})
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteGame = (gameId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${gameId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getGames,
  createGame,
  getGameTypes,
  getGameById,
  updateGame,
  deleteGame,
  getGameByGameType,
};
