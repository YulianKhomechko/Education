import { useRouter } from 'next/router';

const PortfolioDetailPage = () => {
  const router = useRouter();

  // noinspection com.haulmont.rcb.ArrayToJSXMapInspection
  return (
    <div>
      <h1>The Portfolio Detail Page. Portfolio id: {router.query.portfolioId}</h1>
      <h2>router.pathname {router.pathname}</h2>
      <h2>router.query {JSON.stringify(router.query, null, 4)}</h2>
    </div>
  );
};

export default PortfolioDetailPage;
