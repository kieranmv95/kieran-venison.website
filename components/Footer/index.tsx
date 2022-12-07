import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import Grid from "../Grid";
import styles from "./styles.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Grid>
      <p>Designed and built by Kieran Venison</p>
      <ul className={styles.icons}>
        <li>
          <a href="https://github.com/kieranmv95" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kieran-venison/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kvenison/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://dev.to/kieranmv95" target="_blank">
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
      </ul>
    </Grid>
  </footer>
);

export default Footer;
