import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinData, setCoinData] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);
  const onChange = (event, key) => {
    setCoinData(event.target.value);
  };
  return (
    <div>
      <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price} id={coin.symbol}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <p>You can buy {coinData}coins in 20 dollars</p>
        </div>
      )}
    </div>
  );
}

export default App;
