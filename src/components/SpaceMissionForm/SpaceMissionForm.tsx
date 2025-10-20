import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>();
  const [planet, setPlanet] = useState<string>("Mars ");

  
  

  return (
    <div className={styles.container}>
      <h2>Space Mission Form</h2>
      {/* Falsy vlues */}
      
      <label htmlFor="name-input">Astronaut Name:</label>

      <input
        type="text"
        id="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select name="planet"
       id="planet-input"
         value={planet}
        onChange={(e) => setPlanet(e.target.value)}>

        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
      
      {name!=="" ? (
        <p> Astronaut {name} is headed to {planet}!</p>
        //или можно так:{name &&(
        // <p> Astronaut {name} is headed to {planet}!</p>)} одной строкой
        //или так: {name?<p> Astronaut {name} is headed to {planet}!</p>:null}
      ) : (
    
        <p>Please enter your name to begin your mission.</p>
        )}
        
    </div>
  );
}

/* Задание: Форма космической миссии
Создайте React-компонент SpaceMissionForm, в котором будет форма регистрации
 для участия в космической миссии.

🔧 Требования:
Используйте useState для управления состоянием.

Добавьте инпут для ввода имени астронавта.

Добавьте селект с выбором планеты назначения (например: Mars, Venus, Jupiter, Saturn).

Выведите текст вида:

🧑‍🚀 Astronaut Имя is headed to Планета!

Если имя не введено — выводите сообщение:

Please enter your name to begin your mission.

💡 Подсказки:
Инпут должен быть контролируемым: значение задается через useState, а изменение
 — через onChange.
Селект тоже должен быть контролируемым.
Используйте условный рендеринг, чтобы показывать разные сообщения в зависимости
 от введённых данных.
📝 Пример:
Если пользователь ввел имя "Alex" и выбрал "Saturn", должно отображаться:

🧑‍🚀 Astronaut Alex is headed to Saturn!
*/
