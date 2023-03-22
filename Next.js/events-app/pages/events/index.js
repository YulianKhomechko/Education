import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../db/dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getEvents } from '@/utils/apiUtils';

export default function AllEventsPage({ events }) {
  const router = useRouter();
  // const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find great events"
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
