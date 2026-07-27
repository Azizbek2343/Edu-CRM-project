import styles from "./DeleteForm.module.css";
import Button from "../ui-component/buttons/Button";

const DeleteForm = ({ title = "Are you sure to delete", setDeleteShowModal }) => {
  return (
    <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.btns}>
            <Button className="info" onClick={() => setDeleteShowModal(false)}>Cancel</Button>
            <Button className="danger" onClick={() =>setDeleteShowModal(false)}>Delete</Button>
        </div>
    </div>
  )
}

export default DeleteForm