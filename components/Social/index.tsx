import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

const Social = () => (
  <div className={styles.icons}>
    <a href="https://github.com/kieranmv95" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://www.linkedin.com/in/kieran-venison/" target="_blank">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a href="https://www.instagram.com/kvenison/" target="_blank">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://dev.to/kieranmv95" target="_blank">
      <FontAwesomeIcon icon={faDev} />
    </a>
  </div>
);

export default Social;
