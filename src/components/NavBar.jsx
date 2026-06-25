import { Link } from "react-router";
import Nav from "./Nav";

const subNavLinkName = [
  "About Us",
  // "Schools",
  // "Academic",
  "Admissions",
  "Students",
];

const allNavSubLinkArr = [
  ["History", "Founders Note", "School Pledge And Anthem"],
  ["Nursery And Primary", "Secondary And Highschool"],
  ["Secondary Programs", "Primary Programs", "Creche And Nursery Programs"],
  ["Tuition", "Admission Process", "Admission Exams And Result"],
  ["Co-curricular Activities And Clubs"],
];

function NavBar({ navIsOpen }) {
  return (
    <nav
      className={`h-screen md:h-fit bg-white ${navIsOpen ? "navAnimation" : ""} `}
    >
      <ul className="text-center  text-[14px] w-[95%] m-auto font-[poppins] md:flex md:flex-row md:justify-evenly ">
        {subNavLinkName.map((name, i) => (
          <Nav navName={name.toUpperCase()} navSubLinks={allNavSubLinkArr[i]} />
        ))}
        <li className="mb-4 -ml-4.5">
          <Link to="/gallery" className="uppercase ">
            Gallery
          </Link>
        </li>
        <li className="-ml-4.5">
          <Link to="/contact" className="uppercase">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
