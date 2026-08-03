import { NavLink } from "react-router-dom";
import Button from "../ui-component/buttons/Button";

import styles from "./GroupNavbar.module.css";

const GroupNavbar = () => {
  return (
    <div className={styles.container}>
        <ul>
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? styles.active : "")}>
              Davomat
            </NavLink>
          </li>
          <li>
            <NavLink to="coins">Baho</NavLink>
          </li>
        </ul>

        <Button className={"success"}>Add Student</Button>
    </div>
  )
}

export default GroupNavbar