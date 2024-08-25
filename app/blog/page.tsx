import Head from 'next/head';
import Link from 'next/link';
import styles from './blog.module.css';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Friday Blessings Blog</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Friday Blessings Blogs</h1>
        <div className={styles.grid}>
          <article className={styles.card}>
          <img src="/1.png" alt="Flux First Impressions" className={styles.blogImage} />
            <h2>Flux First Impressions</h2>
            <p>Flux 1</p>
            <Link href="/start/1">Read more</Link>
          </article>
          <article className={styles.card}>
          <img src="/2.png" alt="Flux First Impressions" className={styles.blogImage} />
            <h2>Flux First Impressions2</h2>
            <p>Flux 2</p>
            <Link href="/blog/2">Read more</Link>
          </article>
          <article className={styles.card}>
          <img src="/3.png" alt="Flux First Impressions" className={styles.blogImage} />
            <h2>Flux First Impressions3</h2>
            <p>Flux 3</p>
            <Link href="/blog/2">Read more</Link>
          </article>
        </div>
      </main>
    </>
  );
}