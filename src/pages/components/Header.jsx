import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEM = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <div className={styles.description}>
      <nav className={styles.headerlinks}>
        {NAV_ITEM.map((item) => {
          return (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          );
        })}
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
