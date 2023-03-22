import styles from './EventItem.module.css';
import { useRouter } from 'next/router';

export default function EventItem({ event: { id, image, title, date, location } }) {
  const router = useRouter();

  return (
    <li className={styles['event-item']}>
      <img
        src={image}
        alt={title}
      />
      <div className={styles['event-item__content']}>
        <h2>{title}</h2>
        <div>
          <time>{new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        </div>
        <div>
          <address>{location.replace(',', '\n')}</address>
        </div>
      </div>
      <div className={styles['event-item__actions']}>
        <button onClick={() => router.push(`/events/${id}`)}>Explore Event</button>
      </div>
    </li>
  );
}
