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
            <p>"May your Friday be filled with love, joy, and the peace that surpasses all understanding. Happy Friday!"</p>
          </blockquote>
          <blockquote>
            <p>"Blessed are those who see the beauty in humble places where others see nothing. May your Friday be filled with simple joys."</p>
          </blockquote>
          <blockquote>
            <p>"On this beautiful Friday, may God’s blessings be upon you. May He give you strength and courage to face any challenge."</p>
          </blockquote>
          <blockquote>
            <p>"Let this Friday be a reminder that God’s plan for you is greater than your fears and worries. Embrace the blessings of today."</p>
          </blockquote>
          <blockquote>
            <p>"May your Friday sparkle with joy, laughter, and love. May your heart be light and your spirit be strong."</p>
          </blockquote>
          <blockquote>
            <p>"As you go through this Friday, may you find peace in knowing that you are exactly where you need to be. Trust in God's timing."</p>
          </blockquote>
          <blockquote>
            <p>"May the Lord bless you with a Friday filled with favor, love, and happiness. Have a blessed day!"</p>
          </blockquote>
          <blockquote>
            <p>"Let today’s Friday blessing remind you of how far you’ve come and how much more you can achieve. Keep shining!"</p>
          </blockquote>
          <blockquote>
            <p>"May this Friday bring you closer to your dreams, filled with moments of joy and peace. You are blessed."</p>
          </blockquote>
          <blockquote>
            <p>"On this Friday, may you feel the love of God surround you and give you peace throughout the day."</p>
          </blockquote>
        </div>
      </main>
    </>
  );
}