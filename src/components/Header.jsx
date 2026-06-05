import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import { useState } from "react";
import HamburgerIcon from "@iconify-react/quill/hamburger";
import CancelIcon from "@iconify-react/iconoir/cancel";

function Header() {
  const [navIsOpen, setNavISOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between">
        {navIsOpen ? "" : <Logo />}
        <button
          onClick={() => setNavISOpen(!navIsOpen)}
          className="flex ml-auto"
        >
          {navIsOpen ? (
            <CancelIcon height="2.5em" />
          ) : (
            <HamburgerIcon height="2em" />
          )}
        </button>
      </header>
      {navIsOpen ? <NavBar /> : null}
    </>
  );
}

export default Header;
