import { FC } from "react";
import styles from "../styles/Home.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a target="_blank" rel="noopener noreferrer">
        Powered by Angela Kawai Chan
      </a>
    </footer>
  );
};
