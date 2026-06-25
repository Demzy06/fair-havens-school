import { useState } from "react";
import SubNavigationLinks from "./SubNavigationLinks";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.png";
function Nav({ navName, navSubLinks, subNavClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSubNav() {
    setIsOpen(!isOpen);
  }
  return (
    <li className="mb-4">
      <span className="flex justify-center mb-2">
        <span className="m-auto w-fit">{navName}</span>
        <button
          className="cursor-pointer mr-1.5"
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
  );
}

export default Nav;
