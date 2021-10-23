import { FC, useEffect, useState } from "react";
import styles from "../../styles/Table.module.css";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

export const Calc: FC = () => {
  const [flatRatePercentage, setFlatRatePercentage] = useState(0.95);
  const [flatRateInvestment, setFlatRateInvestment] = useState(0);
  const [flatRateReturn, setFlatRateReturn] = useState(0);

  const [ppiInitialRatePercentage, setPpiInitialRatePercentage] =
    useState(0.48);
  const [ppiInitialRateInvestment, setPpiInitialRateInvestment] = useState(0);
  const [ppiInitialRateReturn, setPpiInitialRateReturn] = useState(0);

  const [ppiAccountRatePercentage, setPpiAccountRatePercentage] =
    useState(0.47);
  const [ppiAccountRateInvestment, setPpiAccountRateInvestment] = useState(0);
  const [ppiAccountRateReturn, setPpiAccountRateReturn] = useState(0);

  useEffect(() => {
    setFlatRateReturn((flatRatePercentage / 100) * flatRateInvestment);
  }, [flatRateInvestment]);

  useEffect(() => {
    setPpiInitialRateReturn(
      (ppiInitialRatePercentage / 100) * ppiInitialRateInvestment
    );
  }, [ppiInitialRateInvestment]);

  useEffect(() => {
    setPpiAccountRateReturn(
      (ppiAccountRatePercentage / 100) * ppiAccountRateInvestment
    );
  }, [ppiAccountRateInvestment]);

  return (
    <table className={styles.calcTable}>
      <tr>
        <th>flat rate</th>
        <td>{formatPercentage(flatRatePercentage)}</td>
        <td>
          <input
            type="number"
            value={flatRateInvestment}
            onChange={(e) => setFlatRateInvestment(Number(e.target.value))}
          />
        </td>
        <td>{usd.format(flatRateReturn)}</td>
      </tr>
      <tr>
        <th>PPI</th>
      </tr>
      <tr className={styles.borderThick}>
        <th>initial investment</th>
        <td>{formatPercentage(ppiInitialRatePercentage)}</td>
        <td>
          <input
            type="number"
            value={ppiInitialRateInvestment}
            onChange={(e) =>
              setPpiInitialRateInvestment(Number(e.target.value))
            }
          />
        </td>
        <td>{usd.format(ppiInitialRateReturn)}</td>
      </tr>
      <tr className={styles.borderThick}>
        <th>account value</th>
        <td>{formatPercentage(ppiAccountRatePercentage)}</td>
        <td>
          <input
            type="number"
            value={ppiAccountRateInvestment}
            onChange={(e) =>
              setPpiAccountRateInvestment(Number(e.target.value))
            }
          />
        </td>
        <td>{usd.format(ppiAccountRateReturn)}</td>
      </tr>
      <tr>
        <th>actual rate</th>
        <td>
          {formatPercentage(
            ((ppiAccountRateReturn + ppiInitialRateReturn) /
              ppiAccountRateInvestment) *
              100
          )}
        </td>
        <td></td>
        <td>{usd.format(ppiAccountRateReturn + ppiInitialRateReturn)}</td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <th>acct performanc</th>
        <td>15%</td>
      </tr>
    </table>
  );
};
