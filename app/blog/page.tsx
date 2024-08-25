import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main style={{ backgroundColor: '#9370DB', minHeight: '100vh', padding: '20px' }}>
        <h1>Blog</h1>
        <p>欢迎来到我们的博客页面！</p>
        <ul>
          <li>
            <Link href="/blog/1">Blog Post 1</Link>
          </li>
          <li>
            <Link href="/blog/2">Blog Post 2</Link>
          </li>
        </ul>
      </main>
    </>
  );
}