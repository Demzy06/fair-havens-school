import { useState } from "react";
import SubNavigationLinks from "./SubNavigationLinks";
import ArrowDown2BoldIcon from "@iconify-react/iconamoon/arrow-down-2-bold";

function Nav({ navName, navSubLinks, subNavClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSubNav() {
    setIsOpen(!isOpen);
  }
  return (
    <li className="mb-4">
      <span className="flex justify-center mb-2">
        <span className="m-auto w-fit">{navName}</span>
        <button className="cursor-pointer" onClick={(e) => handleOpenSubNav(e)}>
          <ArrowDown2BoldIcon height="1.5em" />
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
