import { FC, useState } from "react";
import styles from "../styles/Table.module.css";
import CurrencyInput from "react-currency-input-field";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

export const Calc: FC = () => {
  const flatRatePercentage = 0.95;
  const ppiInitialRatePercentage = 0.48;
  const accountValuePercentage = 0.47;
  const [yourInvestment, setYourInvestment] = useState(100000);
  const [accountPerformance, setAccountPerformance] = useState(15);

  const accountValue =
    yourInvestment + yourInvestment * (accountPerformance / 100);

  const yourInvestmentReturn =
    yourInvestment * (ppiInitialRatePercentage / 100);

  const accountValueReturn = accountValue * (accountValuePercentage / 100);

  const totalReturn = accountValueReturn + yourInvestmentReturn;

  const percentageRate = (totalReturn / accountValue) * 100;

  return (
    <table className={styles.calcTable}>
      <tr>
        <th>flat rate</th>
        <td>{formatPercentage(flatRatePercentage)}</td>
        <td>{usd.format(accountValue)}</td>
        <td>{usd.format(accountValue * (flatRatePercentage / 100))}</td>
      </tr>
      <tr>
        <th>PPI</th>
      </tr>
      <tr className={styles.borderThick}>
        <th>your investment</th>
        <td>{formatPercentage(ppiInitialRatePercentage)}</td>
        <td>
          <CurrencyInput
            placeholder="Please enter a number"
            defaultValue={yourInvestment}
            prefix={"$"}
            onValueChange={(value) => setYourInvestment(parseInt(value ?? "0"))}
          />
        </td>
        <td>{usd.format(yourInvestmentReturn)}</td>
      </tr>
      <tr className={styles.borderThick}>
        <th>account value</th>
        <td>{formatPercentage(accountValuePercentage)}</td>
        <td>{usd.format(accountValue)}</td>
        <td>{usd.format(accountValueReturn)}</td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <th>account performance</th>
        <td>
          <input
            className={styles.perfInput}
            type="text"
            value={accountPerformance}
            onChange={(e) =>
              setAccountPerformance(
                parseInt(
                  e.target.value === "" || e.target.value === "-"
                    ? "0"
                    : e.target.value
                )
              )
            }
          />
          <span>%</span>
        </td>
      </tr>
      <tr>
        <th>actual rate</th>
        <td>{formatPercentage(percentageRate !== NaN ? percentageRate : 0)}</td>
        <td></td>
        <td>{usd.format(totalReturn)}</td>
      </tr>
    </table>
  );
};
