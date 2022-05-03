import { Select } from "antd";
import React from "react";
import styles from "./CustomSelect.module.scss";

const { Option } = Select;

interface ICustomSelect {
  items: any[];
  handleSelect: (e: any) => void;
  defaultValue?: string;
  valueKey?: string;
}

const CustomSelect = ({
  items,
  handleSelect,
  defaultValue,
  valueKey,
}: ICustomSelect) => {
  return (
    <Select
      defaultValue={defaultValue}
      className={styles.select}
      onChange={handleSelect}
    >
      {items.map((item) => (
        <Option value={valueKey ? item[valueKey] : item.value}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
