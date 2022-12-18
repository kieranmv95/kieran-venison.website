import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Grid from "../Grid";
import styles from "./styles.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <Grid>
      <p>Designed and built by Kieran Venison</p>
      <ul className={styles.icons}>
        <li>
          <a
            href="https://twitter.com/theliftingdev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kieranmv95"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kieran-venison/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kvenison/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://dev.to/kieranmv95" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
      </ul>
    </Grid>
  </footer>
);

export default Footer;
