import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useTheme } from "../../context/ThemeContext";

export default function Counter2() {
  const myCounter = useCounter();
  const darkTheme = useTheme();

  const styles = {
    color: darkTheme ? "white" : "blue"
  }

  return (
    <div>
      <h1 style={styles}>{myCounter.count}</h1>
      <button onClick={myCounter.increase}>+</button>
      <button onClick={myCounter.decrease}>-</button>
      <button onClick={myCounter.reset}>reset</button>
    </div>
  );
}
