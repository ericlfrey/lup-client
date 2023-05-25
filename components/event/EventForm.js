import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getGames } from '../../utils/data/gameData';
import { createEvent } from '../../utils/data/eventData';

const initialState = {
  description: '',
  date: '',
  time: '',
  organizer: 0,
  gameId: 0,
};

const EventForm = ({ user }) => {
  const [games, setGames] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(initialState);
  const router = useRouter();
  // const { id } = router.query;

  useEffect(() => {
    getGames().then(setGames);
    // if (id) {

    // }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const event = {
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      gameId: Number(currentEvent.gameId),
      organizer: user.uid,
    };

    // Send POST request to your API
    createEvent(event).then(() => router.push('/events'));
  };

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={setCurrentEvent.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" required value={setCurrentEvent.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" required value={setCurrentEvent.time} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Game:</Form.Label>
          <Form.Select name="gameId" required value={setCurrentEvent.gameId} onChange={handleChange}>
            <option value="">Select a game</option>
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventForm;
