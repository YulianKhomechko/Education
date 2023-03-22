import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>The Blog Post</h1>
      <h2>Slug: {JSON.stringify(slug, null, 4)}</h2>
    </div>
  );
};

export default BlogPostPage;
