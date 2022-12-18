import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";

const Social = () => (
  <div className={styles.icons}>
    <a
      href="https://twitter.com/theliftingdev"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://github.com/kieranmv95" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/kieran-venison/"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a
      href="https://www.instagram.com/kvenison/"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://dev.to/kieranmv95" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faDev} />
    </a>
  </div>
);

export default Social;
