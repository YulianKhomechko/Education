import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className="nav">
        <ul className="nav__list">
          {router.pathname !== '/' && (
            <li className="nav__item">
              <Link
                className="nav__link"
                href="/"
              >
                Home
              </Link>
            </li>
          )}
          <li className="nav__item">
            <Link
              className="nav__link"
              href="/events"
            >
              Browse All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
