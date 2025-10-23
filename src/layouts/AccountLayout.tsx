import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes";


export default function AccountLayout() {
  return (
    <div>
        <nav>
            <NavLink to={ROUTES.PROFILE}>Profile</NavLink>
            <NavLink to={ROUTES.SETTINGS}>Settings</NavLink>
        </nav>
        <Outlet/>
      
    </div>
  );
}
