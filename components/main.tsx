import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Calc } from "./calc";

export const Main: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Prudential Premier Investment</h1>
      <Calc />
    </main>
  );
};
