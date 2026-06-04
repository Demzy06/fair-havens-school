import { Link } from "react-router";
import SubLinks from "./SubLinks";

const aboutUsNavSubLinks = [
  "History",
  "Founders Note",
  "School Pledge And Anthem",
  "Gallery",
];
const schoolsNavSubLinks = ["Nursery And Primary", "Secondary And Highschool"];

const academicNavSubLinks = [
  "Secondary Programs",
  "Primary Programs",
  "Creche And Primary Programs",
];

const admissionsNavSubLinks = [
  "Tuition",
  "Admission Process",
  "Admission Exams And Result",
];

const studentNavSubLinks = ["Co-curricular Activities And Clubs"];

function NavBar() {
  return (
    <ul>
      <li>
        <span>About Us</span>
        <SubLinks navSubLinks={aboutUsNavSubLinks} />
      </li>
      <li>
        <span>Schools</span>
        <SubLinks navSubLinks={schoolsNavSubLinks} />
      </li>
      <li>
        <span>Academics</span>
        <SubLinks navSubLinks={academicNavSubLinks} />
      </li>
      <li>
        <span>Admissions</span>
        <SubLinks navSubLinks={admissionsNavSubLinks} />
      </li>
      <li>
        <span>Student Life</span>
        <SubLinks navSubLinks={studentNavSubLinks} />
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavBar;
