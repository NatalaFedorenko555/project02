
import { useEffect, useState } from "react";
import { useCounterContext } from "../../hooks/useCounterContext";


export default function useCounter(start: number) {
  // const [count, setCount] = useState(start);
  const { count, setCount } = useCounterContext();
  
  useEffect(() => {
    setCount(start);
  }, [setCount, start]);

  const [secretNumber, setSecretNumber] = useState(-3);
  function handlePlus() {
    setCount((prev: number) => prev + 1);
  }

  function handleMinus() {
    setCount((prev: number) => prev - 1);
  }

  function handleClear() {
    setCount(0);
  }

  function finishGame() {
    setCount(0);
    setSecretNumber(Math.floor(Math.random() * 20) - 10);
    console.log(secretNumber);
  }
  return {
    count,
    secretNumber,
    finishGame,
    handleClear,
    handlePlus,
    handleMinus,
  };
}