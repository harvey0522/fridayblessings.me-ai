import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styles from '../blog.module.css';

const markdown = `
![Flux First Impressions](/3.png)
# A Friday in the City: A Tale of Gratitude

Emma was a typical city dweller—a young professional, always on the go, and perpetually caught in the whirlwind of city life. From Monday to Thursday, her days were filled with meetings, deadlines, and the constant buzz of the city that never seemed to sleep. But as Friday morning dawned, something felt different.

It wasn’t that the city was any quieter or her workload any lighter. In fact, her schedule was packed with back-to-back meetings, and her inbox was overflowing. Yet, as she stepped out of her apartment and into the crisp morning air, Emma felt a sense of calm that had been absent for weeks.

On her way to the subway, she noticed the little things she usually overlooked: the way the sunlight filtered through the skyscrapers, the sound of birds chirping amidst the city noise, and the smell of fresh coffee wafting from a nearby café. These simple pleasures brought a small smile to her face, reminding her that even in the hustle and bustle of city life, there were moments of peace.

As Emma boarded the crowded subway, she found herself silently thanking the city for its energy and opportunities, rather than resenting it for its chaos. She realized that the very things that often overwhelmed her were also the things that made her feel alive and connected.

Throughout the day, Emma carried this sense of gratitude with her. When a colleague offered to grab her a coffee during a particularly hectic moment, she felt a wave of appreciation. When a stranger held the door open for her as she rushed into a meeting, she smiled and thanked them sincerely. Even the small victory of catching the last express train home felt like a blessing.

By the time she returned to her apartment that evening, Emma felt a profound sense of contentment. The city was still as busy and chaotic as ever, but her perspective had shifted. Instead of feeling drained by the week’s demands, she felt blessed to be part of the rhythm of the city—a rhythm that, despite its intensity, offered countless opportunities for gratitude and grace.

Emma ended her day by jotting down a few things she was thankful for in her journal. As she reflected on the day, she realized that this Friday, more than any other, had reminded her of the power of perspective. Life in the city could be overwhelming, but it could also be beautiful if she chose to see it that way.

And so, as she drifted off to sleep, Emma whispered a prayer of thanks for the city she called home, for the challenges that made her stronger, and for the blessings hidden in the everyday moments of her busy life.

---

**Moral:** In the midst of a busy city life, it's easy to get lost in the chaos and demands of the day. But by choosing to focus on the small blessings and moments of grace, we can find peace and gratitude, even in the heart of the city.
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