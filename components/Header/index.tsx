import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.icon}>
      <span />
      <span />
      <span />
    </div>
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
  </header>
);

export default Header;
