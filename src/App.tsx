  import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye";
import Hello from "./components/Hello/Hello";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProductCard from "./components/ProductCard/ProductCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";

 
function App() {
  const personalInfo = {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmgffzMaeQw7V9cKlwY9AUluTgDqHs0cBAA&s",

    description: "Teacher",
    name: "Alisher",
  };
  return (
    <>
      <p>Hello!</p>
      <Counter />
      <WeightCalculator />
      <Hello />
      <Hello />
      <Goodbye />
      {/* передаем пропс в компонент - как аргумент */}
      <PersonalGreeting name="Alisher" />
      <PersonalGreeting name="Fred" />
      <Tool />

      <ProfileCard {...personalInfo} />
      

      <ProductCard
        title="Opaeroo Paarungsspielzeug für Hunde"
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6dCWJhg_NWxlD6zuYn_a0CDMkebqD3IWtGcPHu6ZOhKs5KmI9eb9c6W41D6RlFy1PzLVs8pTI-JJDLThOPMEAbQ99Pg6ve69oNvUt2q6acOtAv5sXHBjIKvCMBLNNfxjN5sNTGIm3NQ&usqp=CAc"
        price={86.99}
      />
    </>
  );
}

export default App;

// Создайте компонент Goodbye - который содерждит текст
// Goodbye, bye bye!
// Отобразите его на странице

// Destructuring

// const user = {
//   name: "Bobby",
//   age: 18,
// };

// // const name = user.name;
// // const age = user.age;

// const { name, age } = user;
