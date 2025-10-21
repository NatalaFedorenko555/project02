import { useState } from "react";
import type { GenderInfo } from "../types/GenderInfo";
import styles from './GenderReveal.module.css'



export default function GenderReveal() {
  const [name, setName] = useState("");
  const [genderInfo, setGenderInfo] = useState<GenderInfo | undefined>(
    undefined
  );

  const fetchGenderByName = async (name: string) => {
    const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
    const data: GenderInfo = await res.json();
    //setName(data.name);
    setGenderInfo(data);
  };

  function handleGenderReveal() {
    fetchGenderByName(name);
  }

  return (
    <div className={styles.container}>
      <h2>Gender Reveal</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
      />
      <button type="button" onClick={handleGenderReveal}>
        Reveal Gender
      </button>

      {genderInfo ? (
        <div>
          <div>Gender: {genderInfo?.gender}</div>
          <div>Name: {genderInfo?.name}</div>
          <div>Probability: {genderInfo?.probability}</div>
          <div>Remaining credits: {genderInfo?.remaining_credits}</div>
          <div>Country: {genderInfo?.country}</div>
        </div>
      ) : null}
    </div>
  );
}

//DRY - Don't Repeat Yourself
// KISS - Keep It Simple Stupid
//SOLID - Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion

/*



 Задание: Определения пола по имени
Цель: Создать компонент, который по введённому имени определяет пол с помощью API. API documentation
📌 Условия задания:
Создать инпут для ввода имени и кнопку.

При нажатии кнопки — сделать запрос к API:

https://api.genderapi.io/api/?name=ВВЕДЁННОЕ_ИМЯ

Получить ответ в формате:

{
  name: "emily",
  gender: "female",
  country: "US",
  probability: 100,
  remaining_credits: 5
}
Copy
Отобразить на экране следующую информацию:

Имя
Пол (в переводе: male — мужской, female — женский)
Страна
Вероятность
Остаток запросов (credits)

*/
