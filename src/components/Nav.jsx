import { useState } from "react";
import SubNavigationLinks from "./SubNavigationLinks";
function Nav({ navName, navSubLinks, subNavClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSubNav() {
    setIsOpen(!isOpen);
  }
  return (
    <li className="mb-4">
      <span className="flex mb-2">
        <span className="m-auto w-fit">{navName}</span>
        <button className="cursor-pointer" onClick={(e) => handleOpenSubNav(e)}>
          x
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
