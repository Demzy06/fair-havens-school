import { Link } from "react-router";
import Nav from "./Nav";

const subNavLinkName = [
  "About",
  "Schools",
  "Academic",
  "Admissions",
  "Students",
];

const allNavSubLinkArr = [
  ["History", "Founders Note", "School Pledge And Anthem", "Gallery"],
  ["Nursery And Primary", "Secondary And Highschool"],
  ["Secondary Programs", "Primary Programs", "Creche And Primary Programs"],
  ["Tuition", "Admission Process", "Admission Exams And Result"],
  ["Co-curricular Activities And Clubs"],
];

function NavBar() {
  return (
    <ul className="text-center text-[15px]">
      {subNavLinkName.map((name, i) => (
        <Nav navName={name} navSubLinks={allNavSubLinkArr[i]} />
      ))}
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavBar;
