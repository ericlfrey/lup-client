import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  organizer, //
  game,
  description,
  date,
  time,
}) => (
  <Card style={{ width: '18rem', margin: '5px' }}>
    <Card.Body>
      <Card.Title>{description}</Card.Title>
      <Card.Text>By: {organizer}</Card.Text>
      <Card.Text>{date}</Card.Text>
      <Card.Text>{time}</Card.Text>
      <Card.Text>Game: {game}</Card.Text>
      <Card.Link href="#">Edit</Card.Link>
      <Card.Link href="#">Delete</Card.Link>
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

EventCard.propTypes = {
  organizer: PropTypes.number.isRequired,
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default EventCard;
