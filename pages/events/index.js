import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getEvents } from '../../utils/data/eventData';
import EventCard from '../../components/event/EventCard';
import { useAuth } from '../../utils/context/authContext';

function Home() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const getAllEvents = () => getEvents(user.uid).then((data) => setEvents(data));

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <article className="events">
      <h1>Events</h1>
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
      >
        Register New Event
      </Button>
      <div className="card-container">

        {events.map((event) => (
          <section key={`event--${event.id}`} className="event">
            <EventCard id={event.id} organizer={event.organizer.id} game={event.game?.title} description={event.description} date={event.date} time={event.time} joined={event.joined} attendees={event.attendees_count} getEvents={getAllEvents} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Home;
