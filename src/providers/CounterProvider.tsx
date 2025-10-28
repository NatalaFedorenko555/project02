 import { useState, type ReactNode } from "react";
import { CounterContext } from "../context/CounterContext";

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// Redux
// MobX
// Zustand - рекомендую поизучать