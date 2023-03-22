import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '@/utils/apiUtils';

export default function FilteredEventsPage({ hasError, filteredEvents, date: { year, month } }) {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

// pre-rendered for every request on the server
export async function getServerSideProps(context) {
  const { params } = context;

  const [filteredYear, filteredMonth] = params.slug;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true },
      notFound: true,
      redirect: '/error',
    };
  }

  const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

  return {
    props: {
      filteredEvents,
      date: { year: numYear, month: numMonth },
    },
  };
}
