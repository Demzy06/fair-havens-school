import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import { useState } from "react";
import HamburgerIcon from "@iconify-react/quill/hamburger";
import CancelIcon from "@iconify-react/iconoir/cancel";

function Header() {
  const [navIsOpen, setNavISOpen] = useState(false);
  return (
    <>
      <header className="relative z-10">
        <div className="flex justify-between bg-transparent fixed top-0 right-0 left-0">
          {navIsOpen ? "" : <Logo />}
          <button
            onClick={() => setNavISOpen(!navIsOpen)}
            className="flex ml-auto self-center"
          >
            {navIsOpen ? (
              <CancelIcon height="2.5em" />
            ) : (
              <HamburgerIcon height="2em" />
            )}
          </button>
        </div>
      </header>
      {navIsOpen ? <NavBar /> : null}
    </>
  );
}

export default Header;
