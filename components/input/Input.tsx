import { AutoComplete } from "antd";
import fetcher from "../../fetcher";
import React, { useState } from "react";
import { Coins } from "types/Coins";
import styles from "./Input.module.scss";
let timer: NodeJS.Timeout;

interface IInput {
  onSelect: (e: string, item: any) => void;
  reset: () => void;
}

const Input = ({ onSelect, reset }: IInput) => {
  const [options, setOptions] = useState<any[]>();
  const handleOptions = (data: Coins[]) => {
    const mappedOptions = data.map((i) => ({
      value: i.name,
      label: (
        <div className={styles.inputField}>
          <img className={styles.inputImage} src={i.iconUrl} />
          <h5>{i.name}</h5>
          <h5>{i.price}</h5>
        </div>
      ),
      uuid: i.uuid,
    }));
    setOptions(mappedOptions);
  };

  const handleSearch = async (value: string) => {
    if (value) {
      const { data } = await fetcher.get("/search-suggestions", {
        params: { query: value },
      });
      handleOptions(await data.data.coins);
      return;
    }
    setOptions([]);
    reset();
  };

  const onSearch = (v: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleSearch(v);
    }, 300);
  };

  return (
    <AutoComplete
      className={styles.input}
      data-testid="autosuggest-trigger"
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="input here"
    />
  );
};

export default Input;
