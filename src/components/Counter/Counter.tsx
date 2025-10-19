import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // useState принимает начальное значение переменной состояния
  // возвращет кортеж(tuple),
  // в котором на первом месте - переменная состояния(state)
  // на втором месте - функция сеттер(setter) для обновления этой переменной состояния
  //
  //const secretNumber = 7; // загаданное число
  const [secretNumber, setSecretNumber] = useState(7)
  function handlePlus() {
    //  setCount(count + 1);
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    // setCount(count - 1);
    setCount((prev) => prev - 1);
  }
  function finishGame() {
    setCount(0);
    setSecretNumber(Math.floor(Math.random() * 20)-10);
    console.log(secretNumber);
  }

  function handleClear() {
    setCount(0);
  }

  if (count === secretNumber)
    return (
      <div>
        Game is completed!
        <button onClick={finishGame}> Start over</button>
      </div>
    );
      





  // if (count === secretNumber) return <p>Bingo</p>;//то же, что и в div

  //if (count === secretNumber)
  //  return (
  //    <div>
  //      Game is completed!<button onClick={handleClear}> Start over</button>
  //    </div>);

     //или так, тоже работает, поcле  числа 7 вместо кнопки Clear, будет Start over.

  return (
    <div>
      {/* {count===secretNumber?
       <h1>Поздравляю! Вы угадали секретное число {secretNumber}!</h1> : null} */}
      <button type="button" onClick={handleMinus}>
        -
      </button> 
      Counter: {count}
      <button type="button" onClick={handlePlus}>
        +
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
// СОздать кнопку -1 чтобы она работала
// доп. Создать кнопку Clear - которая бы сбрасывала каунтер до 0
