import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styles from '../blog.module.css';

const markdown = `
![Flux First Impressions](/2.png)
# A Friday of Grace

It was a typical Friday morning, and Sarah could already feel the weight of the week pressing down on her shoulders. The deadlines at work, the never-ending chores at home, and the responsibilities of life seemed overwhelming. She sighed deeply as she sipped her coffee, wondering how she would make it through the day.

As she got ready for work, she noticed a small envelope on her kitchen counter. It hadn’t been there the night before. Curious, she opened it and found a simple note inside: 

> "You are loved more than you know. Today, may you see the beauty in every challenge and find peace in every step."

The note wasn’t signed, but it was exactly what she needed to hear. Sarah felt a warmth in her heart, as if someone had wrapped her in a comforting embrace. She took the note with her and slipped it into her bag, feeling a little lighter as she left her house.

Throughout the day, little things kept reminding Sarah of the message in the note. A kind word from a coworker, a small gesture from a stranger, and even the way the sun broke through the clouds seemed like gentle reminders that she was blessed. Despite the hectic pace of the day, she found moments of peace and grace.

By the time the evening rolled around, Sarah realized that this Friday was unlike any other. It wasn’t that the day had been easier or less busy; it was that she had faced it with a different perspective. The challenges were still there, but the blessings were, too—hidden in the simple joys and quiet moments.

As Sarah sat down to unwind, she found herself reflecting on the day. She pulled out the note once more, reading the words that had carried her through. It didn’t matter who had written it. What mattered was the message: every day holds its own blessings, if only we take the time to notice them.

And so, as the sun set on that Friday, Sarah whispered a prayer of gratitude. For the note, for the day, and for the unseen hand that had guided her through it all.

---

**Moral:** Sometimes, all we need is a reminder of the blessings around us. Even in the busiest or most challenging times, grace and peace are there, waiting to be noticed.
`;

export default function Blog2() {
  return (
    <>
      <Head>
        <title>A Friday of Grace</title>
      </Head>
      <main className={styles.main}>
        <ReactMarkdown className={styles.markdown}>{markdown}</ReactMarkdown>
      </main>
    </>
  );
}