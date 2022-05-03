import CoinTable from "./CoinTable";
import { render } from "@testing-library/react";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const data = [
  {
    uuid: "Qwsogvtv82FCd",
    symbol: "BTC",
    name: "Bitcoin",
    color: "#f7931A",
    iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    marketCap: "719419928966",
    price: "37804.95051235103",
    listedAt: 1330214400,
    tier: 1,
    change: "-1.71",
    rank: 1,
    sparkline: [
      "38462.0377267328100000000000",
      "38454.8477017092379492600000",
      "38688.0544241894200109280000",
      "38666.8122725522530802970000",
      "38564.8081062574095605790000",
      "38459.8681817423611211430000",
      "38519.0221558194677097500000",
      "38481.3822450118887743310000",
      "38566.5490311332868806080000",
      "38502.4536447219321671160000",
      "38551.7201568484690652530000",
      "38525.3069035177154450040000",
      "38548.9243845845398662980000",
      "38593.9968874799558208050000",
      "38522.6954035402441285610000",
      "38461.9867403242314755000000",
      "38493.2098690957559394850000",
      "38529.7035824114537991840000",
      "38408.5962328697097779630000",
      "38347.1327861240587447750000",
      "38378.1806028405631728960000",
      "38276.7053564859610710060000",
      "38238.7579892022630205050000",
      "37956.6951382011319829020000",
      "37762.5960477940561536150000",
      "37716.9488220819074282140000",
      "37804.9505123510300000000000",
    ],
    lowVolume: false,
    coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    "24hVolume": "22110398157",
    btcPrice: "1",
  },
  {
    uuid: "razxDUgYGNAdQ",
    symbol: "ETH",
    name: "Ethereum",
    color: "#3C3C3D",
    iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
    marketCap: "335187607072",
    price: "2787.2372158245144",
    listedAt: 1438905600,
    tier: 1,
    change: "-2.26",
    rank: 2,
    sparkline: [
      "2851.6064576486370000000000",
      "2850.0389176845570027110000",
      "2877.6914076975153031760000",
      "2877.4600780952820712960000",
      "2868.9972076220641019960000",
      "2851.7232215471493382760000",
      "2854.7139842455472266280000",
      "2855.1153474386886359960000",
      "2860.3517048081258372990000",
      "2856.3642333006099910690000",
      "2853.1148346719453358760000",
      "2854.0619437195114290090000",
      "2854.3834669020023875960000",
      "2859.6293804304266244430000",
      "2852.9167567373646178700000",
      "2843.4644901978391661870000",
      "2849.9340131952976382780000",
      "2854.7978898421523535350000",
      "2846.3814782203711732210000",
      "2844.5702972869560152760000",
      "2840.8334971749208926270000",
      "2826.1265086691357145060000",
      "2829.2862699295943109830000",
      "2812.8221755428721370840000",
      "2795.9126834276743833210000",
      "2786.6222405310128071540000",
      "2787.2372158245144000000000",
    ],
    lowVolume: false,
    coinrankingUrl: "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
    "24hVolume": "12642049610",
    btcPrice: "0.07372677858456428",
  },
];

describe("CoinTable Component", () => {
  test("should match snapshot", () => {
    const { container } = render(<CoinTable dataSource={data} />);
    expect(container).toMatchSnapshot();
  });
  test("should show correct amount of rows", () => {
    const { container } = render(<CoinTable dataSource={data} />);

    const columns = container.querySelectorAll(".ant-table-row");
    expect(columns).toHaveLength(data.length);
  });
});
