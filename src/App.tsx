  import { HashRouter,  Route, Routes } from "react-router-dom";
import "./App.css";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import { ROUTES as R} from "./constants/routes";
import Cohort_68 from "./pages/Cohort_68/Cohort_68";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AccountLayout from "./layouts/AccountLayout";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import ProductPage from "./pages/ProductPage/ProductPage";
import Country from "./components/Country/Country";
import ProductsList from "./pages/ProductsList/ProductsList";
import Users from "./pages/Users/Users";
import UserPage from "./pages/UserPage/UserPage";
import CatFacts from "./pages/CatFacts/CatFacts";
import Parent from "./pages/Parent/Parent";
import SigninPage from "./pages/SigninPage/SigninPage";




 function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={R.GENDER_REVEAL} element={<GenderReveal />} />
            <Route path={R.SPACE_MISSION} element={<SpaceMissionForm />} />
            <Route path={R.RANDOM_JOKE} element={<RandomJoke />} />
            <Route path={R.COHORT_68} element={<Cohort_68 />} />
            <Route path={R.ABOUT} element={<About />} />
            <Route path={R.CONTACT} element={<Contact />} />
             <Route path={R.ACCOUNT} element={<AccountLayout />}>
              <Route path={R.SETTINGS} element={<Settings />} />
              <Route path={R.PROFILE} element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/countries/:id/:slug" element={<Country />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductPage />} />
             <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/cat-facts" element={<CatFacts />} />
           < Route path="/parent" element={<Parent />} />
           < Route path="/sign-in" element={<SigninPage/>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
