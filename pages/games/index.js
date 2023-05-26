import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useRouter } from 'next/router';
import GameCard from '../../components/game/GameCard';
import { getGames } from '../../utils/data/gameData';

function Home() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  const getAllGames = () => getGames().then((data) => setGames(data));

  useEffect(() => {
    getAllGames();
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
        <DropdownButton id="dropdown-basic-button" title="Dropdown button" className="game-filter-btn">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>

      </div>
      <div className="card-container">
        {games.map((game) => (
          <section key={`game--${game.id}`} className="game">
            <GameCard id={game.id} title={game.title} maker={game.maker} numberOfPlayers={game.number_of_players} skillLevel={game.skill_level} getCards={getAllGames} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Home;
