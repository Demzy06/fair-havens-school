import { useState } from "react";
import SubNavigationLinks from "./SubLinks";
function Nav({ navName, navSubLinks, subNavClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSubNav() {
    setIsOpen(!isOpen);
  }
  return (
    <li className={navName}>
      <span className="flex ">
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
