import { useParams } from "react-router-dom"

const StudentsOfGroup = () => {
  const params = useParams();
  console.log(useParams);
  
  return (
    <div>
        <h1>StudentsOfGroup</h1>
    </div>
  )
}

export default StudentsOfGroup