export default function UserProfilePage(props) {
  return <h1>{props.user.username}</h1>;
}

// executes on the server after deployment
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  // console.log(req);
  // console.log(res);

  return {
    props: {
      user: { username: 'Yulian' },
      // fallback
      // notFound
      // redirect
    },
  };
}
