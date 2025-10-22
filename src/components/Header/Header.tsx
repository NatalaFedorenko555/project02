import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from './Header.module.css'

export default function Header() {
  return (
    <div>
    
      <header className={styles.header}>
        <nav>
            <NavLink to={ROUTES.HOME} className={styles.link}>Home</NavLink>
            <NavLink to={ROUTES.RANDOM_JOKE} className={styles.link}>Random Joke</NavLink>
            <NavLink to={ROUTES.GENDER_REVEAL} className={styles.link}>Random Joke</NavLink>
            <NavLink to={ROUTES.SPACE_MISSION} className={styles.link}>Random Joke</NavLink>
            <NavLink to={ROUTES.COHORT_68} className={styles.link}>Cohort_68</NavLink>
        </nav>
        </header>
    </div>
  )
}
