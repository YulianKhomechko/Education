import path from 'path';
import fs from 'fs/promises';

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;
  // useEffect(() => {
  //
  // });

  if (!loadedProduct) {
    return <p>Loading...</p>;
  } // this is not needed because of fallback: 'blocking'

  // const eventId = router.query.eventId;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  async function loadData() {
    const dataPath = path.join(process.cwd(), 'data', 'db.json');
    return JSON.parse(await fs.readFile(dataPath));
  }

  const { params } = context;
  const productId = params.productId;

  const data = await loadData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  async function loadData() {
    const dataPath = path.join(process.cwd(), 'data', 'db.json');
    return JSON.parse(await fs.readFile(dataPath));
  }

  const data = await loadData();

  const ids = data.products.map((product) => product.id);

  const params = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: [...params],
    fallback: true,
    // fallback: 'blocking',
  };
}
