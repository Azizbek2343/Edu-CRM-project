import styles from "./Header.module.css";
import { InputSearch } from "../ui-component/inputs/Input";
import Button from "../ui-component/buttons/Button";
import Modal from "../modal/Modal";

const Header = ({
  placeholder = "search by name or phone number",
  setSearchBy,
  setShowModal
}) => {
  return (
    <div className={styles.container}>
        <InputSearch placeholder={placeholder} setValue={setSearchBy} />
        <div onClick={() => setShowModal(true)}>
          <Button className="success">Create</Button>
        </div>
    </div>
  )
}

export default Header