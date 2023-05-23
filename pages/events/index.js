import React, { useEffect, useState } from 'react';
import { getEvents } from '../../utils/data/eventData';
import EventCard from '../../components/event/EventCard';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard organizer={event.organizer.id} game={event.game?.title} description={event.description} date={event.date} time={event.time} />
        </section>
      ))}
    </article>
  );
}

export default Home;
