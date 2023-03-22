import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>The Home Page</h1>
      <ul className={styles.nav}>
        <li>
          <Link
            // replace
            href={'/portfolio'}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link href={'/blog'}>Blogs</Link>
        </li>
        <li>
          <Link href={'/clients'}>Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
