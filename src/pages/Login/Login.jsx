import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [inputValue, setInputValue] = useState("");

  return (
    <form>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Link to="/home">
        <button type='submit'>login</button>
      </Link>
    </form>
  );
}
