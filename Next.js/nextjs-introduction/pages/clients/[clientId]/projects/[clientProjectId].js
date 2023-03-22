import { useRouter } from 'next/router';

const ClientProjectIdPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <h2>Client id: {query.clientId}</h2>
      <h2>Project id: {query.clientProjectId}</h2>
    </div>
  );
};

export default ClientProjectIdPage;
