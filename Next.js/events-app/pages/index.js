import Head from 'next/head';
import Link from 'next/link';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '@/utils/apiUtils';

export default function HomePage(props) {
  // Client-side data fetching might be not the best option in this case
  // as it is a starting page, which should be understood by search crawlers
  // and improve user experience
  // it's not likely to change very often
  // it is not user specific data
  // not authorized data

  // useEffect(() => {}, [])

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find great events"
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 60,
  };
}
