import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { deleteEvent, joinEvent, leaveEvent } from '../../utils/data/eventData';
import { useAuth } from '../../utils/context/authContext';

const EventCard = ({
  id,
  organizer, //
  game,
  description,
  date,
  time,
  joined,
  getEvents,
}) => {
  const { user } = useAuth();

  const leave = () => leaveEvent(id, user.uid).then(() => getEvents());
  const join = () => joinEvent(id, user.uid).then(() => getEvents());
  const handleDelete = () => {
    deleteEvent(id).then(() => getEvents());
  };

  return (
    <Card style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>By: {organizer}</Card.Text>
        <Card.Text>{date}</Card.Text>
        <Card.Text>{time}</Card.Text>
        <Card.Text>Game: {game}</Card.Text>
        <Card.Link href={`/events/edit/${id}`}>Edit</Card.Link>
        <Card.Link href="#" onClick={handleDelete}>Delete</Card.Link>
        <Card.Body>
          {
            joined
              ? <Button className="btn-danger" onClick={leave}>Leave</Button>
              : <Button className="btn-success" onClick={join}>Join</Button>
          }
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  organizer: PropTypes.number.isRequired,
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
  getEvents: PropTypes.func.isRequired,
};

export default EventCard;
