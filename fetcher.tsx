import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://api.coinranking.com/v2",
  headers: {
    "x-access-token":
      "coinranking4e4eb838a6e68bf5316e0b3e2ee69eaf8a519aa6415b2855",
    "Access-Control-Allow-Origin": "*",
  },
});

export default fetcher;
