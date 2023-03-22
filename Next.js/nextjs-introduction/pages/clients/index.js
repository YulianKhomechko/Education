import Link from 'next/link';

const CLIENTS = [
  { id: 'max', name: 'Maximilian' },
  { id: 'manuel', name: 'Manuel' },
];

const ClientsPage = () => {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/*<li>*/}
        {/*  <Link href={'/clients/max'}>Max</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href={'/clients/manuel'}>Manuel</Link>*/}
        {/*</li>*/}
        {CLIENTS.map((client) => (
          <li key={client.id}>
            {/*<Link href={`/clients/${client.id}`}>{client.id}</Link>*/}
            <Link
              href={{
                pathname: '/clients/[clientId]',
                query: { clientId: client.id },
              }}
            >
              {client.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
