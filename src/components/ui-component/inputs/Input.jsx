import styles from './Input.module.css'
import { useEffect, useState } from 'react';
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

export const InputSearch = ({
  placeholder = "",
  value,
  setValue = function() {},
}) => {
  return (
      <input 
        className={styles.search}
        type="search" 
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
  );
};

export const InputSelectOptions = () => {
  const [showData, setShowData] = useState([]);
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false)

  const teachers = [
    { 
      id: 1, 
      fullname: "Alisher" 
    },
    { 
      id: 2, 
      fullname: "Jamshidbek"
    },
    { 
      id: 3, 
      fullname: "Azizbek" 
    },
  ];

  useEffect(() => {
    const filteredData = teachers.filter(teacher => teacher.fullname.toLowerCase().includes(value.toLowerCase()));
    setShowData(filteredData)
  }, [value]);

  function handleSelect(teacher) {
    setValue(teacher.fullname)
    setIsShow(false)
  }

  return (
    <div className={styles.selectOptions}>
      <input 
      type="search" 
      placeholder="search by name" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      />
      {isShow && (
      <ul>
        {showData.map((teacher) => (
          <li key={teacher.id} onClick={() => handleSelect(teacher)}>{teacher.fullname}</li>
        ))}
      </ul>
      )}
    </div>
  );
};