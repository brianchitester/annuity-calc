import { FC } from "react";
import Head from "next/head";

export const Header: FC = () => {
  return (
    <Head>
      <title>Annuity Calc</title>
      <meta name="description" content="calculate annuity costs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
