import styles from "./AddStudentForm.module.css";
import { InputText } from "../../../components/ui-component/inputs/Input";
import { useState } from "react";
import Button from "../../../components/ui-component/buttons/Button";

const AddStudentForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState(""); 

    function handleSubmit(e) {
        e.preventDefault();

        const newStudent = {
            firstname, 
            lastname, 
            phone, 
            id: Date.now(),
        }
        console.log(newStudent);
    }

    return (
            <form onSubmit={handleSubmit} className={styles.container}> 
                <InputText
                    label="Firstname"
                    placeholder="Azizbek"
                    value={firstname}
                    setValue={setFirstname}
                />
                <InputText
                    label="Lastname"
                    placeholder="Nasritdinov"
                    value={lastname}
                    setValue={setLastname}
                />
                <InputText
                    label="Phone"
                    placeholder="+998901234567"
                    value={phone}
                    setValue={setPhone}
                />
                <div className={styles.btns}>
                    <Button type='reset' className="danger">
                        Cancel
                    </Button>
                    <Button type='submit' className="success">
                        Create
                    </Button>
                </div>
            </form>
    )
}

export default AddStudentForm