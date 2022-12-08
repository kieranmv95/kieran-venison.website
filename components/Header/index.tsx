import { useState } from "react";
import { NavIcon } from "./NavIcon";
import { Nav } from "./Nav";

import styles from "./styles.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <NavIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <Nav />
    </header>
  );
};

export default Header;
