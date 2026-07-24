import { useState } from "react";
import Header from "../../components/header/Header";
import StudentsTable from "../../features/students/studentsTable/StudentsTable";
import Modal from "../../components/modal/Modal";

const Students = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  

  return (
    <>
    {showModal && <Modal />}
    <div>
        <Header setSearchBy={setSearchBy} setShowModal={setShowModal} />
        <StudentsTable searchBy={searchBy} />
    </div>
    </>
  )
}

export default Students