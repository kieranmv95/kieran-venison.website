import cx from "classnames";
import styles from "./navIcon.module.scss";

type NavIconProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const NavIcon = ({ isOpen, toggle }: NavIconProps) => (
  <div
    className={cx(styles.icon, isOpen && styles.iconActive)}
    onClick={toggle}
  >
    <span />
    <span />
    <span />
  </div>
);
