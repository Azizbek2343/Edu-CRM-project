import { useParams } from "react-router-dom";
import styles from "./GroupCoins.module.css";
import { InputCoin } from "../../../components/ui-component/inputs/Input";

const GroupCoins = () => {
  const students = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
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
    {
      id: 5,
      date: "10",
    },
    {
      id: 6,
      date: "12",
    },
    {
      id: 7,
      date: "15",
    },
    {
      id: 8,
      date: "17",
    },
    {
      id: 9,
      date: "19",
    },
    {
      id: 10,
      date: "21",
    },
    {
      id: 11,
      date: "23",
    },
    {
      id: 12,
      date: "25",
    },
    {
      id: 13,
      date: "28",
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
                      <InputCoin key={i} />
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

export default GroupCoins