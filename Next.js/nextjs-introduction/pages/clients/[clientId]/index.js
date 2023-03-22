import { useRouter } from 'next/router';

const ClientDetailsPage = () => {
  const { query } = useRouter();
  const router = useRouter();

  const loadProjectHandler = async (clientId, clientProjectId) => {
    // router.replace()
    // router.push('/clients/max/projectA');
    await router.push({
      pathname: '/clients/[clientId]/projects/[clientProjectId]',
      query: { clientId, clientProjectId },
    });
  };

  return (
    <div>
      <h1>The Client Details Page. Client id: {query.clientId}</h1>
      <button onClick={() => loadProjectHandler(query.clientId, 'projectA')}>Load Project A</button>
    </div>
  );
};

export default ClientDetailsPage;
