 import "./App.css";
import Hello from "./components/Hello/Hello";
import Goodbye from "./components/Goodbye/Goodbye";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <p>Hello!</p>
      <Hello />
      <Hello />
      <Goodbye />
      {/*передаём propsы(как аргумент) в компонент PersonalGreeting*/}
      <PersonalGreeting name="Alischer" />
      <PersonalGreeting name ="Fred" />


      <ProductCard
        title="Opaeroo Paarungsspielzeug für Hunde"
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6dCWJhg_NWxlD6zuYn_a0CDMkebqD3IWtGcPHu6ZOhKs5KmI9eb9c6W41D6RlFy1PzLVs8pTI
        -JJDLThOPMEAbQ99Pg6ve69oNvUt2q6acOtAv5sXHBjIKvCMBLNNfxjN5sNTGIm3NQ&usqp=CAc"
        price={69.99}
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


  