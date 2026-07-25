import { useEffect, useState } from "react";
import styles from "./StudentsTable.module.css";
import Modal from "../../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddStudentForm from "../addStudentForm/AddStudentForm";

const students = [
  {
    id: 1,
    fullName: "Anvarov Muxtor",
    phone: "+998901234567",
    coin: 246,
    group: "ALG-web-123",
  },
  {
    id: 2,
    fullName: "Soliyev Anvar",
    phone: "+998904561234",
    coin: 123,
    group: "ALG-web-101",
  },
  {
    id: 3,
    fullName: "Karimova Zaynab",
    phone: "+998917894561",
    coin: 310,
    group: "ALG-web-123",
  },
  {
    id: 4,
    fullName: "Tursunov Jasur",
    phone: "+998933216549",
    coin: 195,
    group: "ALG-web-101",
  },
  {
    id: 5,
    fullName: "Azizova Malika",
    phone: "+998946543210",
    coin: 420,
    group: "ALG-web-123",
  },
  {
    id: 6,
    fullName: "Rahmonov Bekzod",
    phone: "+998991237890",
    coin: 280,
    group: "ALG-web-102",
  },
  {
    id: 7,
    fullName: "Ergasheva Dilnoza",
    phone: "+998959876543",
    coin: 355,
    group: "ALG-web-102",
  },
  {
    id: 8,
    fullName: "Umarov Sardor",
    phone: "+998974567891",
    coin: 145,
    group: "ALG-web-101",
  },
  {
    id: 9,
    fullName: "Niyozova Sevara",
    phone: "+998987891234",
    coin: 290,
    group: "ALG-web-123",
  }
];

const StudentsTable = ({ searchBy }) => {
  const [showData, setShowData] = useState(students);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const filteredData = students.filter(student => 
      student.fullName.toLowerCase().includes(searchBy.toLowerCase()) ||
      student.phone.toLowerCase().includes(searchBy.toLowerCase()),
    );

    setShowData(filteredData)
  }, [searchBy]);

  function editStudent(student) {
    console.log("edit", student);
    
  }

  return (
    <>
    {showModal && (
      <Modal >
      <button onClick={ () => setShowModal(false)}>
       <FaXmark />
      </button>
      <AddStudentForm setShowModal={setShowModal} />
      </Modal>
    )}
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Coin</th>
            <th>Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.fullName}</td>
              <td>{student.phone}</td>
              <td>{student.coin}</td>
              <td>{student.group}</td>
              <td>
                <div className={styles.actions}>
                  <button className={styles.editBtn} onClick={() => editStudent(student)}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default StudentsTable;