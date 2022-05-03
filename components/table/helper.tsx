import { SortOrder } from "antd/lib/table/interface";
import { Coins } from "types/Coins";
import styles from "./CoinTable.module.scss";

type Column = {
  title?: string;
  key: string;
  dataIndex: string;
  render?: (item: string) => JSX.Element;
  sorter?: (item: Coins, next: Coins) => number;
  defaultSortOrder?: SortOrder;
};

export const columns: Column[] = [
  {
    title: "Rank",
    key: "rank",
    dataIndex: "rank",
    sorter: (a, b) => a.rank - b.rank,
  },
  {
    key: "iconUrl",
    dataIndex: "iconUrl",
    render: (image) => (
      <div className={styles.imageContainer}>
        <img src={image} className={styles.coinImage} />
      </div>
    ),
  },
  {
    title: "Name",
    key: "name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
    sorter: (a, b) => a.price.length - b.price.length,
  },
  {
    title: "Market Cap",
    key: "marketCap",
    dataIndex: "marketCap",
    sorter: (a, b) => a.marketCap.length - b.marketCap.length,
    defaultSortOrder: "descend",
  },
  {
    title: "Change",
    key: "change",
    dataIndex: "change",
    sorter: (a, b) => a.change.length - b.change.length,
  },
];
