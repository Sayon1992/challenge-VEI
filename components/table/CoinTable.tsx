import { Table } from "antd";
import React from "react";
import { Coins } from "../../types/Coins";
import { columns } from "./helper";

interface ICoinTable {
  dataSource: Coins[];
}

const CoinTable = (props: ICoinTable) => {
  return (
    <Table
      rowKey="uuid"
      columns={columns}
      {...props}
      pagination={{ pageSize: 25 }}
    />
  );
};

export default CoinTable;
