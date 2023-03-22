export async function getEvents() {
  const response = await fetch(
    'https://nextjs-course-fe8aa-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  );
  const events = await response.json();

  const parsedEvents = [];

  for (const key in events) {
    parsedEvents.push({
      id: key,
      ...events[key],
    });
  }
  return parsedEvents;
}

export async function getFeaturedEvents() {
  const events = await getEvents();

  return events.filter((event) => event.isFeatured);
}

export async function getEvent(id) {
  const events = await getEvents();

  const event = events.find((event) => String(event.id) === String(id));

  if (!event) {
    return null;
  }

  return event;
}

export async function getFilteredEvents({ year, month }) {
  const events = await getEvents();

  return events.filter((event) => {
    const eventDate = new Date(event.date);

    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}
