import { useEffect, useState } from "react";
import cx from "classnames";
import { NavIcon } from "./NavIcon";
import { Nav } from "./Nav";

import styles from "./styles.module.css";
import { Router } from "next/router";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      setIsOpen(false);
    });
  }, []);

  return (
    <header className={styles.header}>
      <NavIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <div className={cx(styles.navDisplay, isOpen && styles.navDisplayActive)}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
