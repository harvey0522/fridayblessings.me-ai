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
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.description}>welcome</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h2>Flux First Impressions</h2>
            <p>Flux 是一个新的 AI 工具，旨在简化机器学习模型的部署和管理。</p>
            <Link href="/blog/1">Read more</Link>
          </article>
          <article className={styles.card}>
            <h2>Flux First Impressions2</h2>
            <p>Flux 是一个新的 AI 工具，旨在简化机器学习模型的部署和管理。</p>
            <Link href="/blog/2">Read more</Link>
          </article>
        </div>
      </main>
    </>
  );
}