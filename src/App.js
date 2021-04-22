import React, { useState, useEffect } from "react";

export default function App(props) {
  const { state, increment, initState } = useAppService(props);

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={initState}>Reset</button>
    </div>
  );
}

export function useAppService(props) {
  const initialState = {
    counter: 0
  };
  const [state, setState] = useState({ ...initialState });

  const increment = () => {
    setState({
      ...state,
      counter: state.counter + 1
    });
  };

  const initState = () => {
    setState({ ...initialState });
  };

  return { state, increment, initState };
}
