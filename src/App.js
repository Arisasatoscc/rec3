import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  const testreqest = fetch("https://op58ng3qyh.execute-api.ap-northeast-1.amazonaws.com/default/")
    .then((res) => res.json()) // JSON形式に変換
    .then((json) => setData(json))
    .catch(() => alert("error")); // エラー発生時にアラート

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
