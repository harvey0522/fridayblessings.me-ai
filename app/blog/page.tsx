import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Friday Blessings Blog</title>
      </Head>
      <main>
        <h1>Friday Blessings Blog</h1>
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