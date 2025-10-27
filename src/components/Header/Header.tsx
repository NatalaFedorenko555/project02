import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./Header.module.css";
import { useAuth } from "../../hooks/useAuth";

const getClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.activeLink : styles.link;

export default function Header() {
  const {user} = useAuth();
  return (
    <header className={styles.header}>
      {user?.email}
      <nav>
        <NavLink to={ROUTES.HOME} className={getClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.RANDOM_JOKE} className={getClass}>
          Random Joke
        </NavLink>
        <NavLink to={ROUTES.GENDER_REVEAL} className={getClass}>
          Gender Reveal
        </NavLink>
        <NavLink to={ROUTES.SPACE_MISSION} className={getClass}>
          Space Mission
        </NavLink>
        <NavLink to={ROUTES.COHORT_68} className={getClass}>
          Cohort 68
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={getClass}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={getClass}>
          Contact us
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={getClass}>
          Account
        </NavLink>
        <NavLink to="/products" className={getClass}>
          Products
        </NavLink>
        <NavLink to="/users" className={getClass}>
          Users
        </NavLink>
        <NavLink to="/parent" className={getClass}>
          Parent
        </NavLink>
        <NavLink to="/sign-in" className={getClass}>
          Signin
        </NavLink>
         <NavLink to="/create-category" className={getClass}>
          Create category
        </NavLink>
      </nav>
    </header>
  );
}
