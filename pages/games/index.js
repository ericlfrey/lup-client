import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useRouter } from 'next/router';
import GameCard from '../../components/game/GameCard';
import { getGames, getGameTypes, getGameByGameType } from '../../utils/data/gameData';
import { useAuth } from '../../utils/context/authContext';

function Home() {
  const [games, setGames] = useState([]);
  const [gameTypes, setGameTypes] = useState();
  const router = useRouter();
  const { user } = useAuth();

  const getAllGames = () => getGames(user.uid).then((data) => setGames(data));
  const filterGamesByType = (gameTypeId) => getGameByGameType(gameTypeId).then(setGames);

  useEffect(() => {
    getAllGames();
    getGameTypes().then(setGameTypes);
  }, []);

  return (
    <article className="games">
      <h1>Games</h1>
      <div className="event-btns">
        <Button
          onClick={() => {
            router.push('/games/new');
          }}
        >
          Register New Game
        </Button>
        <DropdownButton id="dropdown-basic-button" title="Filter by Game Type" className="game-filter-btn">
          <Dropdown.Item href="#" onClick={getAllGames}>All Games</Dropdown.Item>
          {gameTypes?.map((gameType) => (
            <Dropdown.Item key={gameType.id} href="#" onClick={() => filterGamesByType(gameType.id)}>{gameType.label}</Dropdown.Item>
          ))}
        </DropdownButton>

      </div>
      <div className="card-container">
        {games.map((game) => (
          <section key={`game--${game.id}`} className="game">
            <GameCard id={game.id} title={game.title} maker={game.maker} numberOfPlayers={game.number_of_players} skillLevel={game.skill_level} eventCount={game.event_count} getCards={getAllGames} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Home;
