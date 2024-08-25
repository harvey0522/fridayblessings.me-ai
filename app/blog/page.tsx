import { useRouter } from 'next/router';
import Head from 'next/head';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Blog Post {id}</title>
      </Head>
      <main style={{ backgroundColor: '#9370DB', minHeight: '100vh', padding: '20px' }}>
        <h1>Blog Post {id}</h1>
        <p>这是博客文章 {id} 的内容。</p>
      </main>
    </>
  );
}