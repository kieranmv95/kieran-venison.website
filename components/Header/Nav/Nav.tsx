import Link from "next/link";
import styles from "./nav.module.scss";

export const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link href="/" className={styles.link}>
          <span>01.</span>Home
        </Link>
      </li>
      <li>
        <Link href="/about" className={styles.link}>
          <span>02.</span>About
        </Link>
      </li>
      <li>
        <Link href="/blog" className={styles.link}>
          <span>03.</span>Blog
        </Link>
      </li>
      <li>
        <Link href="/#contact" className={styles.link}>
          <span>04.</span>Contact
        </Link>
      </li>
    </ul>
  </nav>
);
