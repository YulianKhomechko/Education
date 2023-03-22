import styles from './EventList.module.css';
import EventItem from '@/components/EventItem';

export default function EventList({ items }) {
  return (
    <ul className={styles['event-list']}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          event={event}
        />
      ))}
    </ul>
  );
}
