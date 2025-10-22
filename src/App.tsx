  import { HashRouter,  Route, Routes } from "react-router-dom";
import "./App.css";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Tool from "./components/Tool/Tool";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./constants/routes";
import Cohort_68 from "./pages/Cohort_68/Cohort_68";



 
function App() {
   
  return (
    <>
      <HashRouter>
      <Routes> 
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.GENDER_REVEAL}element={<GenderReveal/>}/>
        <Route path={ROUTES.SPACE_MISSION}element={<SpaceMissionForm/>}/>
        <Route path={ROUTES.RANDOM_JOKE}element={<RandomJoke/>}/>
        <Route path={ROUTES.COHORT_68}element={<Cohort_68/>}/>
        
        <Route path="*"element={<NotFound/>}/>
        </Route>
      </Routes>
      </HashRouter>

      
       
      <Tool />

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
