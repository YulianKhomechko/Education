import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head';

// _app.js is an application shell. It will be rendered for every page

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta
          name="description"
          content="Find the best events"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
