import GameForm from '../../../components/game/GameForm';
import { useAuth } from '../../../utils/context/authContext';

const EditGame = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register New Game</h2>
      <GameForm user={user} />
    </div>
  );
};

export default EditGame;
