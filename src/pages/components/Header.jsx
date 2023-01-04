import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = (props) => {
  return (
    <div className={styles.description}>
      <nav className={styles.headerlinks}>
        <Link href="/">index</Link>
        <Link href="/about">about</Link>
      </nav>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};
export default Header;
