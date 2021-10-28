import { FC } from "react";
import Head from "next/head";

export const Header: FC = () => {
  return (
    <Head>
      <title>Annuity Calc</title>
      <meta name="description" content="calculate annuity costs" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
