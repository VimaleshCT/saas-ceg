import React, { useState } from "react";
import "./Events.css"; // Include the required CSS here


const eventsData = [
  {
    id: 1,
    name: "Fresher's day",
    imageUrl: "./../../assets/Events/Freshers.jpg", // Replace with real image URL
    description:
      "A first step in a journey filled with excitement, learnings and possibilities SAAS organises an annual event to welcome and create a warm and friendly environment for the freshers. The event besides providing a platform to showcase their talent also serves as an opportunity to meet and interact with their peers and seniors.",
  },
  {
    id: 2,
    name: "Agni",
    imageUrl: "./../../assets/Events/agni.jpeg", // Replace with real image URL
    description:
      "As the saying goes, “A small match lights a big fire, SAAS organises an intra college cultural fest -AGNI – every year to indulge the students in various fun events amidst their engaging academic schedule.  The three-day fest includes movie screening, concert night and a plethora of events for the students to participate and enjoy with their friends..",
  },
  {
    id: 3,
    name: "Techofes",
    imageUrl: "./../../assets/Events/techofes.jpeg", // Replace with real image URL
    description:
      " A dream doesn’t become reality through magic; it takes determination and hard work. An astonishing and promising annual event of our renowned institution is TECHOFES, South-India’s Biggest Cultural Fest. We are successfully stepping into the 76th edition of Techofes. The grand fest is a multitude of events, workshops and shows, primarily focusing on providing a rostrum for creativity and soulful talents",
  },
];

const EventCard = ({ event }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <section id="events">
        <div
          className="event-card"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`event-image-container ${hovered ? "rotate" : ""}`}>
            {hovered ? (
              <div className="event-info">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
            ) : (
              <img
                src={event.imageUrl}
                alt={event.name}
                className="event-image"
              />
            )}
            {!hovered && <div className="event-title">{event.name}</div>}
          </div>
        </div>
      </section>
    </>
  );
};

const Events = () => {
  return (
    <>
      <h2 className="gallery-title">Our Events</h2>
      <div className="events-container">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};

export default Events;
