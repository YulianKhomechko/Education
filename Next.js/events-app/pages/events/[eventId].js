import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEvent, getEvents, getFeaturedEvents } from '@/utils/apiUtils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function EventDetailPage({ event }) {
  // const router = useRouter();
  //
  // const eventId = router.query.eventId;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Event: {event.title}</title>
        <meta
          name="description"
          content="Find great events"
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { eventId } = context.params;

  const event = await getEvent(eventId);

  return {
    props: {
      event,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const eventsPaths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: eventsPaths,
    fallback: true, // false means that fallback is not required
    // as we specified all possible paths
  };
}
