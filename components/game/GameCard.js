import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const GameCard = ({
  id,
  title, //
  maker,
  numberOfPlayers,
  skillLevel,
}) => (
  <Card style={{ width: '18rem', margin: '5px' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{maker}</Card.Subtitle>
      <Card.Text>Number of Players: {numberOfPlayers}</Card.Text>
      <Card.Text>Skill Level: {skillLevel}</Card.Text>
      <Card.Link href={`/games/edit/${id}`}>Edit</Card.Link>
      <Card.Link href="#">Delete</Card.Link>
    </Card.Body>
  </Card>
);

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default GameCard;
