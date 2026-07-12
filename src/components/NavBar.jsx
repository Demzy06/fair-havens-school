import { Link } from "react-router";
import Nav from "./Nav";

const subNavLinkName = [
  "About Us",
  // "Schools",
  "Academic",
  "Admissions",
  "Students",
];

const allNavSubLinkArr = [
  [
    // "History",
    "Founders Note",
    "School Pledge And Anthem",
    "Fair Havens At A Glance",
  ],
  // ["Nursery And Primary", "Secondary And Highschool"],
  ["Secondary Programs", "Primary Programs", "Creche And Nursery Programs"],
  ["Tuition", "Admission Process"],
  ["Co-curricular Activities And Clubs"],
];

function NavBar({ navIsOpen, isSticky }) {
  return (
    // <nav
    //   className={`h-screen md:h-fit bg-white ${navIsOpen ? "navAnimation" : ""} `}
    // >
    //   <ul className="text-center text-[14px] w-[95%] m-auto font-[poppins] md:flex md:flex-row md:justify-evenly ">
    //     {subNavLinkName.map((name, i) => (
    //       <Nav navName={name.toUpperCase()} navSubLinks={allNavSubLinkArr[i]} />
    //     ))}
    //     <li className="mb-4 w-[92.7%]">
    //       <Link to="/gallery" className="uppercase ">
    //         Gallery
    //       </Link>
    //     </li>
    //     <li className=" w-[92.6%]">
    //       <Link to="/contact-us" className="uppercase">
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav
      className={`h-screen md:h-fit bg-white md:bg-transparent md:text-white ${navIsOpen ? "navAnimation" : ""} md:w-[55%] ${navIsOpen ? "block" : "hidden"} md:block`}
    >
      <ul
        className={`text-center text-[14px] w-[95%] m-auto font-[poppins] md:flex justify-between items-center md:h-11 ${isSticky ? "text-black" : "tex-white"}`}
      >
        {subNavLinkName.map((name, i) => (
          <Nav navName={name.toUpperCase()} navSubLinks={allNavSubLinkArr[i]} />
        ))}
        <li className="mb-4 w-[92.7%] md:w-fit md:m-0 ">
          <Link
            to="/gallery"
            className="uppercase md:pl-4 md:pr-4 md:p-0 md:font-medium md:text-[15px]"
          >
            Gallery
          </Link>
        </li>
        <li className=" w-[92.6%] md:w-fit">
          <Link
            to="/contact-us"
            className="uppercase md:pl-4 md:pr-4 md:p-0 md:font-medium md:text-[15px]"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
