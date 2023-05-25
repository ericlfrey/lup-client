import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { deleteEvent } from '../../utils/data/eventData';

const EventCard = ({
  id,
  organizer, //
  game,
  description,
  date,
  time,
  getEvents,
}) => {
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
          {/* {
            event.joined ?
              <Button className="btn-danger" onClick={leave}>Leave</Button>
              : <Button className="btn-success" onClick={join}>Join</Button>
          } */}
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
  getEvents: PropTypes.func.isRequired,
};

export default EventCard;
