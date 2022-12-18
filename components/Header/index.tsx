import { useEffect, useState } from "react";
import cx from "classnames";
import { NavIcon } from "./NavIcon";
import { Nav } from "./Nav";

import styles from "./styles.module.scss";
import { Router } from "next/router";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      setIsOpen(false);
    });

    Router.events.on("hashChangeComplete", () => {
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
