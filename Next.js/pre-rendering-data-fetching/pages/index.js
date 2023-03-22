import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

// Next.js pre-renders pages by default

function HomePage({ products }) {
  // props will be populated with the result of the getStaticProps function

  return (
    <ul>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
        >
          {product.title}
        </Link>
      ))}
    </ul>
  );
}

// pre-fetch the data before the page is rendered
// this function will be executed first
export async function getStaticProps(context) {
  const dataPath = path.join(process.cwd(), 'data', 'db.json');
  const data = await fs.readFile(dataPath);
  // you should always return an object with the props key
  // this code won't be exposed to the client
  // you can use server-side code here

  if (!data) {
    // return {
    //   notFound: true,
    // }
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  return {
    props: {
      products: JSON.parse(data).products,
      // products: [
      //   { id: "p1", title: "Product 1" },
      //   { id: "p2", title: "Product 2" },
      //   { id: "p3", title: "Product 3" },
      // ],
    },
    revalidate: 10, // re-generate the page every 10 seconds
    // notFound: true, // return 404 if no data is found
    // redirect: {
    //   destination: '/products',
    // }
  };
}

// Incremental Static Generation
// Re-generate it on every request, at most every X seconds => Serer "old" page if re-generation is not needed yet / generate, store and serve "new" page

export default HomePage;
