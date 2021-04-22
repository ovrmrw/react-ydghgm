import React, { useState, useEffect } from "react";

export default function App(props) {
  const { state, increment, initState } = AppService(props);

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={initState}>Reset</button>
    </div>
  );
}

export function AppService(props) {
  const initialState = {
    counter: 0
  };
  const [state, setState] = useState({ ...initialState });

  const increment = () => {
    setState({
      ...state,
      counter: state.counter + 1
    });
    // setState は非同期処理で、数ミリ秒後に useEffect が発火する。
  };

  const initState = () => {
    setState({ ...initialState });
  };

  return { state, increment, initState };
}
