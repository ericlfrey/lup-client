import { clientCredentials } from '../client';

const getEvents = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getEventById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createEvent = (event, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(event),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${event.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const leaveEvent = (eventId, uid) => fetch(`http://localhost:8000/events/${eventId}/leave`, {
  method: 'DELETE',
  headers: {
    Authorization: `${uid}`,
  },
});

const joinEvent = (eventId, uid) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8000/events/${eventId}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getEvents, createEvent, getEventById, updateEvent, deleteEvent, leaveEvent,
  joinEvent,
};
