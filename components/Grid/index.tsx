import styles from "./styles.module.css";

export type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => (
  <div className={styles.grid}>{children}</div>
);

export default Grid;
