
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("Hook useCounterContext must be used inside provider");
  }
  return context;
};