// import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage() {
  // const [sales, setSales] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const url = 'https://nextjs-course-fe8aa-default-rtdb.europe-west1.firebasedatabase.app/sales.json';

  const {
    data: sales,
    error,
    isLoading,
  } = useSWR(url, (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((sales) => {
        const transformedSales = [];

        for (const key in sales) {
          transformedSales.push({ id: key, username: sales[key].username, volume: sales[key].volume });
        }

        return transformedSales;
      })
  );

  // useEffect(() => {
  //   setIsLoading(true);
  //
  //   fetch('https://nextjs-course-fe8aa-default-rtdb.europe-west1.firebasedatabase.app/sales.json')
  //     .then((res) => res.json())
  //     .then((sales) => {
  //       const transformedSales = [];
  //
  //       for (const key in sales) {
  //         transformedSales.push({ id: key, username: sales[key].username, volume: sales[key].volume });
  //       }
  //
  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data...</p>;
  }

  console.log(sales);

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}$
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
