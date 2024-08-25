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
          <Link href="/blog/1">
              <img src="/1.png" alt="Friday Blessings Quotes" className={styles.blogImage} />
          </Link>
              <h2>Friday Blessings Quotes 1</h2>
              <p>Friday Blessings Quotes 1</p>
            
          </article>
          <article className={styles.card}>
          <Link href="/blog/2">
          <img src="/2.png" alt="Friday Blessings Story 1" className={styles.blogImage} />
          </Link>
            <h2>Friday Blessings Story 1</h2>
            <p>Friday Blessings Story 1</p>
            
          </article>
          <article className={styles.card}>
          <Link href="/blog/3">
          <img src="/3.png" alt="Friday Blessings Story 2" className={styles.blogImage} />
          </Link>
            <h2>Friday Blessings Story 2</h2>
            <p>Friday Blessings Story 2</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/4">
          <img src="/4.png" alt="Friday Blessings Story 4" className={styles.blogImage} />
          </Link>
            <h2>Friday Blessings Story 4</h2>
            <p>Friday Blessings Story 4</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/5">
          <img src="/5.png" alt="Friday Blessings Story 5" className={styles.blogImage} />
          </Link>
            <h2>Friday Blessings Story 5</h2>
            <p>Friday Blessings Story 5</p>
           
          </article>
          <article className={styles.card}>
          <Link href="/blog/6">
          <img src="/6.png" alt="Friday Blessings Story 6" className={styles.blogImage} />
          </Link>
            <h2>Friday Blessings Story 6</h2>
            <p>Friday Blessings Story 6</p>
           
          </article>
        </div>
      </main>
    </>
  );
}