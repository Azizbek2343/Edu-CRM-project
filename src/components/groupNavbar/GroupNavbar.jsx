import { NavLink } from "react-router-dom";
import Button from "../ui-component/buttons/Button";

import styles from "./GroupNavbar.module.css";

const GroupNavbar = () => {
  return (
    <div className={styles.container}>
        <ul>
          <li>
            <NavLink end to="" className={({ isActive }) => (isActive ? styles.active : "")}>
              Davomat
            </NavLink>
          </li>
          <li>
            <NavLink end to="coins" className={({ isActive }) => (isActive ? styles.active : "")}>
              Baho
            </NavLink>
          </li>
        </ul>

        <Button className={"success"}>Add Student</Button>
    </div>
  )
}

export default GroupNavbar