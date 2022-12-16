import styles from "../../styles/Home.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const CARDS = [
  {
    link: "/",
    title: "Index",
    description: "To Index Page",
  },
  {
    link: "/about",
    title: "About",
    description: "To About Page",
  },
  {
    link: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    link: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    link: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    link: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
];

export const Cards = () => {
  return (
    <div className={styles.grid}>
      {CARDS.map((card) => {
        return (
          <Link
            key={card.title}
            href={card.link}
            className={styles.card}
            target="_parent"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {card.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>{card.description}</p>
          </Link>
        );
      })}
    </div>
  );
};
