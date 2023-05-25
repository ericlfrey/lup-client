import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { deleteGame } from '../../utils/data/gameData';

const GameCard = ({
  id, title, maker, numberOfPlayers, skillLevel, getCards,
}) => {
  const handleDelete = () => {
    deleteGame(id).then(() => getCards());
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '5px' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{maker}</Card.Subtitle>
          <Card.Text>Number of Players: {numberOfPlayers}</Card.Text>
          <Card.Text>Skill Level: {skillLevel}</Card.Text>
          <Card.Link href={`/games/edit/${id}`}>Edit</Card.Link>
          <Card.Link href="#" onClick={handleDelete}>Delete</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
  getCards: PropTypes.func.isRequired,
};

export default GameCard;
