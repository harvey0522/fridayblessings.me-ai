import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styles from '../blog.module.css';

const markdown = `
![Flux First Impressions](/6.png)

# Friday Blessings Quotes

> "May your Friday be filled with love, joy, and the peace that surpasses all understanding. Happy Friday!"

> "Blessed are those who see the beauty in humble places where others see nothing. May your Friday be filled with simple joys."

> "On this beautiful Friday, may God's blessings be upon you. May He give you strength and courage to face any challenge."

> "Let this Friday be a reminder that God's plan for you is greater than your fears and worries. Embrace the blessings of today."
`;

export default function Blog1() {
  return (
    <>
      <Head>
        <title>Friday Blessings Quotes</title>
      </Head>
      <main className={styles.main}>
        <ReactMarkdown className={styles.markdown}>{markdown}</ReactMarkdown>
      </main>
    </>
  );
}