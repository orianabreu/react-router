import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useTheme } from "../../context/ThemeContext";
import Counter2 from "./Counter2";

export default function Counter() {
  const myCounter = useCounter();
  const darkTheme = useTheme();
  console.log(myCounter);

  const styles = {
    color: darkTheme ? "white" : "blue"
  }

  return (
    <div>
      <h1 style={styles}>{myCounter.count}</h1>
      <button onClick={myCounter.increase}>+</button>
      <button onClick={myCounter.decrease}>-</button>
      <button onClick={myCounter.reset}>reset</button>

      <Counter2 />
    </div>

  );
}
