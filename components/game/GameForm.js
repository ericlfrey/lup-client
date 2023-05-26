import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  createGame, getGameById, getGameTypes, updateGame,
} from '../../utils/data/gameData';

const initialState = {
  skillLevel: 1,
  numberOfPlayers: 0,
  title: '',
  maker: '',
  gameTypeId: 0,
};

const GameForm = ({ user }) => {
  const [gameTypes, setGameTypes] = useState([]);
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getGameTypes().then(setGameTypes);

    if (id) {
      getGameById(id).then((gameObj) => {
        const gameType = gameObj.game_type.id;
        setCurrentGame((prevState) => ({
          ...prevState,
          id: gameObj.id,
          skillLevel: gameObj.skill_level,
          numberOfPlayers: gameObj.number_of_players,
          title: gameObj.title,
          maker: gameObj.maker,
          gameTypeId: gameType,
        }));
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    if (currentGame.id) {
      const game = {
        id: currentGame.id,
        maker: currentGame.maker,
        title: currentGame.title,
        numberOfPlayers: Number(currentGame.numberOfPlayers),
        skillLevel: Number(currentGame.skillLevel),
        gameType: Number(currentGame.gameTypeId),
        userId: user.uid,
      };
      updateGame(game).then(() => router.push('/games'));
    } else {
      const game = {
        maker: currentGame.maker,
        title: currentGame.title,
        number_of_players: Number(currentGame.numberOfPlayers),
        skill_level: Number(currentGame.skillLevel),
        game_type: Number(currentGame.gameTypeId),
        userId: user.uid,
      };
      createGame(game, user.uid).then(() => router.push('/games'));
    }
  };

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Maker</Form.Label>
          <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Players</Form.Label>
          <Form.Control type="number" name="numberOfPlayers" required value={currentGame.numberOfPlayers} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Skill Level</Form.Label>
          <Form.Control type="number" name="skillLevel" required value={currentGame.skillLevel} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Game Type</Form.Label>
          <Form.Select
            name="gameTypeId"
            required
            value={currentGame.gameTypeId}
            onChange={handleChange}
          >
            <option value="">Select a game type</option>
            {gameTypes.map((gameType) => (
              <option key={gameType.id} value={gameType.id}>
                {gameType.label}
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

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameForm;
