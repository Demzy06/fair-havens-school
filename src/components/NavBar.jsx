import { Link } from "react-router";
import Nav from "./Nav";

const subNavLinkName = [
  "About Us",
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

function NavBar({ navIsOpen }) {
  return (
    <nav className={`h-screen bg-white ${navIsOpen ? "navAnimation" : ""}  `}>
      <ul className="text-center text-[14px] w-[95%] m-auto font-[poppins]">
        {subNavLinkName.map((name, i) => (
          <Nav navName={name.toUpperCase()} navSubLinks={allNavSubLinkArr[i]} />
        ))}
        <li>
          <Link to="/contact" className="uppercase">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
