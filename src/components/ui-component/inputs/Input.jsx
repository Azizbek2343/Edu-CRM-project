import styles from './Input.module.css'
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

export const InputPassword = ({
  label = "Password",
  placeholder = "",
  value, 
  setValue = function () {}
}) => {
   const [show, setShow] = useState(false);
  return (
    <div className={styles.password}>
      <label htmlFor={label}>{label}</label>
      <div>
       <input 
        type={show ? "text" : "password"} 
        placeholder={placeholder} 
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
        <button type='button' onClick={() => setShow((prev) => !prev)}>
          {show ? <FaRegEyeSlash /> : <FaRegEye />}
       </button>
      </div>
    </div>
  );
};

export const InputEmail = ({
  label = "Email", 
  placeholder = "",
  value, 
  setValue = function () {}
}) => {
  return (
    <div className={styles.email}>
      <label htmlFor={label}>{label}</label>
      <input 
        type="email" 
        placeholder={placeholder} 
        id={label} 
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
    </div>
  );
};

export const InputText = ({
  label = "", 
  placeholder = "",
  value, 
  setValue = function () {}
}) => {
  return (
    <div className={styles.text}>
      <label htmlFor={label}>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder} 
        id={label} 
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
    </div>
  );
};

export const InputSelectOptions = ({ value, setValue = function () {} }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const teachers = [
    { id: 1, fullname: "Alisher" },
    { id: 2, fullname: "Jamshidbek" },
    { id: 3, fullname: "Nodira" },
    { id: 4, fullname: "Otabek" },
    { id: 5, fullname: "Gulnora" },
  ]

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.selectOptions}>
      <input 
        type="search" 
        placeholder='search by name' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTeachers.map((teacher) => (
          <li key={teacher.id} onClick={() => setValue(teacher.fullname)}>
            {teacher.fullname}
          </li>
        ))}
      </ul>
    </div>
  );
};