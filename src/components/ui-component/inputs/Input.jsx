import styles from './Input.module.css'
import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FaXmark, FaCheck, FaClock, FaMinus } from 'react-icons/fa6';

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
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState(null);
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
    if( name === "" ) {
        setFilteredData(null)
        return;
    }

    setFilteredData(() => 
      teachers.filter((teacher) => 
        teacher.fullname.toLowerCase().includes(name.toLowerCase()),
    ));
  }, [name])
  
  function handleSelect(teacher) {
    setName(teacher.fullname);
    setFilteredData(null);
  }

  return (
    <div className={styles.selectOptions}>
      <input 
      type="search" 
      placeholder="search by name"
      value={name}
      onChange={(e) => setName(e.target.value)} 
      />
      {filteredData && (
      <ul>
        {filteredData.map(teacher => (
          <li key={teacher.id} onClick={() => handleSelect(teacher)}>{teacher.fullname}</li>
        ))}
      </ul>
      )}
    </div>
  );
};

export const InputAttendance = () => {
  const [name, setName] = useState(null);
  const [show, setShow] = useState(false);
  const statuses = [
    { 
      id: 1, 
      icon: <FaXmark />,
      status: true,
    },
    { 
      id: 2, 
      icon: <FaCheck />,
      status: false,
    },
    { 
      id: 3, 
      icon: <FaClock />,
      status: undefined, 
    },
    { 
      id: 4, 
      icon: <FaMinus />,
      status: null, 
    },
  ];
  
  function handleSelect(status) {
    setName(status); 
    setShow(false);
  }

  return (
    <div className={styles.attendance}>
      <div onClick={() => setShow(true)}>{name?.status === null ? "" : name?.icon}</div>
      {show && (
        <ul>
          {statuses.map((status) => (
            <li key={status.id} onClick={() => handleSelect(status)}>{status.icon}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const InputCoin = () => {
  const [grade, setGrade] = useState(null);
  const [show, setShow] = useState(false);
  const coins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  function handleSelect(coin) {
    coin ? setGrade : setGrade(null); 
    setShow(false);
  }

  return (
    <div className={styles.coins}>
      <div onClick={() => setShow(true)}>{grade}</div>
      {show && (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id} onClick={() => handleSelect(coin)}>{coin}</li>
          ))}
        </ul>
      )}
    </div>
  );
};