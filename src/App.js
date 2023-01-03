import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created");
    return () => console.log("Destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );

  {
    /*
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log(`Boot`);
  }, [counter]);
  useEffect(() => {
    console.log(`Counter`);
  }, [counter]);
  useEffect(() => {
    console.log(`Search for ${keyword}`);
  }, [keyword]);
  useEffect(() => {
    console.log(`keyword & counter`);
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>  
    </div>
  );
  >*/
  }
}

export default App;
