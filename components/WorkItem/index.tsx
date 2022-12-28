import styles from "./styles.module.scss";

type WorkItemProps = {
  company: string;
  title: string;
  date: string;
  text: string;
};

const WorkItem = ({ company, title, date, text }: WorkItemProps) => (
  <div>
    <p className={styles.company}>{company}</p>
    <p className={styles.title}>{title}</p>
    <p className={styles.date}>{date}</p>
    <p>{text}</p>
  </div>
);

export default WorkItem;
