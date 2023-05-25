import EventForm from '../../../components/event/EventForm';
import { useAuth } from '../../../utils/context/authContext';

const EditEvent = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Edit Event</h2>
      <EventForm user={user} />
    </div>
  );
};

export default EditEvent;
