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
  <Card className="text-center">
    <Card.Header>{description}</Card.Header>
    <Card.Body>
      <Card.Title>Game: {game}</Card.Title>
      <Card.Text>Organized By:{organizer}</Card.Text>
      <Card.Text>Date:{date}</Card.Text>
      <Card.Text>Time:{time}</Card.Text>
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
