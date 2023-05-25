import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getEvents } from '../../utils/data/eventData';
import EventCard from '../../components/event/EventCard';

function Home() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
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
            <EventCard id={event.id} organizer={event.organizer.id} game={event.game?.title} description={event.description} date={event.date} time={event.time} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Home;
