import { useState } from "react";
import SubNavigationLinks from "./SubNavigationLinks";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.png";
function Nav({ navName, navSubLinks, subNavClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSubNav() {
    setIsOpen(!isOpen);
  }

  function handleCloseSubNav() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <li
        className="mb-4 md:m-0 md:relative md:pl-4 md:pr-4 md:p-2.5 md:font-medium md:text-[15px] cursor-pointer"
        onMouseEnter={(e) => handleOpenSubNav(e)}
        onMouseLeave={(e) => handleCloseSubNav(e)}
      >
        <span className="flex justify-center mb-2 md:m-0">
          <span className="m-auto w-fit">{navName}</span>
          <button
            className="cursor-pointer mr-1.5 md:hidden"
            onClick={(e) => handleOpenSubNav(e)}
          >
            <img
              src={ArrowDownIcon}
              alt="arrow-down-icon"
              className="w-5.5 h-5.5"
            />
          </button>
        </span>
        {isOpen ? (
          <SubNavigationLinks
            navSubLinks={navSubLinks}
            subNavClassName={subNavClassName}
            subNavLinkName="about"
          />
        ) : null}
      </li>
    </>
  );
}

export default Nav;
