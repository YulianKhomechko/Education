This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Pre-Generate Paths (Routes)

--- 

Dynamic pages ([id].js etc ) don't just need data: You also need to know which [id] values will be available.
Multiple concrete [id] page instances (e.g. id = 1, id = 2, id = 3) are generated at build time.

export async function getStaticPaths() { ... };

## Server-side Rendering

---

Sometimes, you need to re-render for every request OR you need access to the request object (e.g. for cookies)

NexJS allows you to run "real server-side code" as well

export async function getServerSideProps() { ... };

You should use either getStaticProps or getServerSideProps, but not both.

// Client-side data fetching 

// Some data doesn't need to be pre-rendered:
// Data changing with high frequency (e.g. stock data), Highly user-specific data (e.g. last orders in an online shop)
// Partial data (e.g. data that's only used on a part of an page)

// Pre-fetching the data for page generation might not work or be required 
// "Traditional client-side data fetching (e.g. useEffect with fetch is fine)"


