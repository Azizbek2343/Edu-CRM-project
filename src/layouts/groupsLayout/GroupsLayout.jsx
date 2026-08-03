import { Outlet, useParams } from "react-router-dom"
import GroupNavbar from "../../components/groupNavbar/GroupNavbar"
import StudentsOfGroup from "../../components/studentsOfGroup/StudentsOfGroup"

const groupsLayout = () => {
  const params = useParams();
  console.log(params);
  
  return (
    <div>
    <GroupNavbar />
      <main>
        <StudentsOfGroup />
        <Outlet />
      </main>
    </div>
  )
}

export default groupsLayout