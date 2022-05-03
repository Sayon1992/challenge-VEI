import CoinTable from "@/components/table/CoinTable";
import { GetStaticProps } from "next";
import Head from "next/head";
import fetcher from "../fetcher";
import { Coins } from "../types/Coins";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Input from "@/components/input/Input";
import CustomSelect from "@/components/select/CustomSelect";
import { Currency } from "types/Currencies";
import { timePeriod } from "../constants";

interface IHome {
  coins: Coins[];
  currencies: Currency[];
}

let params: {};

const Home = ({ coins, currencies }: IHome) => {
  const [items, setItems] = useState<Coins[]>(coins);

  const handleCurrency = async (value: string) => {
    params = { ...params, referenceCurrencyUuid: value };
    const response = await fetcher.get("/coins", { params: params });
    setItems(await response.data.data.coins);
  };

  const handlePeriod = async (value: string) => {
    params = { ...params, timePeriod: value };
    const response = await fetcher.get("/coins", { params: params });
    setItems(await response.data.data.coins);
  };

  const onSelect = async (_: string, item: any) => {
    params = { ...params, uuids: item.uuid };
    const response = await fetcher.get("/coins", { params: params });
    setItems(await response.data.data.coins);
  };

  const reset = () => {
    setItems(coins);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coin Table</title>
        <meta name="description" content="Coin table for Vei Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Coin Ranking</h1>
      <div className={styles.searcherContainer}>
        <div className={styles.inputContianer}>
          <Input onSelect={onSelect} reset={reset} />
        </div>
        <CustomSelect
          valueKey="uuid"
          defaultValue="yhjMzLPhuIDl"
          items={currencies}
          handleSelect={handleCurrency}
        />
        <CustomSelect
          defaultValue="24hs"
          items={timePeriod}
          handleSelect={handlePeriod}
        />
      </div>
      <CoinTable dataSource={items} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetcher.get("/coins");
  const { data: currencyData } = await fetcher.get("/reference-currencies");
  return {
    props: {
      coins: await data.data.coins,
      currencies: currencyData.data.currencies,
    },
  };
};
