import Head from 'next/head';
import styles from './blog.module.css';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Friday Blessings Blog</title>
      </Head>
      <main className={styles.main}>
      <img src="/1.png" alt="Flux First Impressions" className={styles.blogImage} />
        <h1 className={styles.title}>Friday Blessings Blog</h1>
        <div className={styles.content}>
          <p>Here are some Friday blessings quotes to inspire and uplift you:</p>
          <blockquote>
            <p>&quot;May your Friday be filled with love, joy, and the peace that surpasses all understanding. Happy Friday!&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;Blessed are those who see the beauty in humble places where others see nothing. May your Friday be filled with simple joys.&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;On this beautiful Friday, may Gods blessings be upon you. May He give you strength and courage to face any challenge.&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;Let this Friday be a reminder that Gods plan for you is greater than your fears and worries. Embrace the blessings of today.&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;May your Friday sparkle with joy, laughter, and love. May your heart be light and your spirit be strong.&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;As you go through this Friday, may you find peace in knowing that you are exactly where you need to be. Trust in God's timing.&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;May the Lord bless you with a Friday filled with favor, love, and happiness. Have a blessed day!&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;Let todays Friday blessing remind you of how far youve come and how much more you can achieve. Keep shining!&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;May this Friday bring you closer to your dreams, filled with moments of joy and peace. You are blessed.&quot;</p>
          </blockquote>
          <blockquote>
            <p>&quot;On this Friday, may you feel the love of God surround you and give you peace throughout the day.&quot;</p>
          </blockquote>
        </div>
      </main>
    </>
  );
}