import { useParams } from "react-router-dom"
import styles from "./StudentsOfGroup.module.css"
import { FaTrash } from "react-icons/fa6"; // or FaXmark

const StudentsOfGroup = () => {
  const params = useParams();
  // console.log(useParams);
  
  const students = [
  {
    id: 1,
    firstname: "Jasur",
    lastname: "Karimov"
  },
  {
    id: 2,
    firstname: "Bekzod",
    lastname: "Tursunov"
  },
  {
    id: 3,
    firstname: "Sardor",
    lastname: "Aliyev"
  },
  {
    id: 4,
    firstname: "Umid",
    lastname: "Rahimov"
  },
  {
    id: 5,
    firstname: "Otabek",
    lastname: "Nosirov"
  },
  {
    id: 6,
    firstname: "Aziz",
    lastname: "Sobirov"
  },
  {
    id: 7,
    firstname: "Sanjar",
    lastname: "Qodirov"
  },
  {
    id: 8,
    firstname: "Bobur",
    lastname: "Ismoilov"
  },
  {
    id: 9,
    firstname: "Sherzod",
    lastname: "Yusupov"
  },
  {
    id: 10,
    firstname: "Diyor",
    lastname: "Mamatov"
  }
]

  return (
    <div className={styles.container}>
      <ul>
        {students.map((student, i) => (
          <li key={student.id}>
            <span>
              {i + 1}. {student.lastname} {student.firstname}
              </span>
            <button>
              <FaTrash />
            </button>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default StudentsOfGroup