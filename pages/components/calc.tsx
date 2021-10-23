import { FC } from "react";
import styles from "../../styles/Table.module.css";

export const Calc: FC = () => {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formatPercentage = (value: number): string => {
    return `${value}%`;
  };

  return (
    <table className={styles.calcTable}>
      <tr>
        <th>flat rate</th>
        <td>{formatPercentage(0.95)}</td>
        <td>{usd.format(1000)}</td>
        <td>$1000</td>
      </tr>
      <tr>
        <th>PPI</th>
      </tr>
      <tr className={styles.borderThick}>
        <th>initial investment</th>
        <td>0.48%</td>
        <td>$1000</td>
        <td>$1000</td>
      </tr>
      <tr className={styles.borderThick}>
        <th>account value</th>
        <td>0.47%</td>
        <td>$1000</td>
        <td>$1000</td>
      </tr>
      <tr>
        <th>actual rate</th>
        <td>0.89%</td>
        <td></td>
        <td>$123</td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <th>acct performanc</th>
        <td>$1000</td>
      </tr>
    </table>
  );
};
