import { useParams } from "react-router-dom";
import styles from "./GroupAttendance.module.css";

const GroupAttendance = () => {

  const students = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const lessons = [
    {
      id: 1,
      date: "1",
    },
    {
      id: 2,
      date: "3",
    },
    {
      id: 3,
      date: "5",
    },
    {
      id: 4,
      date: "8",
    },
  ];
  return (
    <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {lessons.map((lesson) => {
              return (
              <div key={lesson.id} className={styles.lesson}>
                {students.map((student, i) => {
                  return (
                    <div key={i} className={styles.checking}>✅</div>
                  )
                })}
              </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default GroupAttendance