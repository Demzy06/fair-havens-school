import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import { useEffect, useRef, useState } from "react";
import HamburgerIcon from "@iconify-react/quill/hamburger";
import CancelIcon from "@iconify-react/iconoir/cancel";

function Header() {
  const [navIsOpen, setNavISOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerEl = useRef(null);

  useEffect(function () {
    const headerHeight = headerEl.current.getBoundingClientRect().height;
    console.log(headerHeight);
    function handleScroll() {
      setIsSticky(window.scrollY > headerHeight);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerEl}
        className={`${!navIsOpen ? `${isSticky && "fixed bg-white transition-all duration-300 ease-in-out"}` : "fixed"} absolute pr-0 pl-0 w-full left-0 z-100 `}
      >
        <div
          className={`flex justify-between pr-2 pl-2 p-1 ${navIsOpen ? "bg-white" : ""} md:justify-between`}
        >
          {navIsOpen ? "" : <Logo />}

          <div className="hidden md:flex  ">
            <NavBar navIsOpen={navIsOpen} />
          </div>

          <button
            onClick={() => setNavISOpen(!navIsOpen)}
            className="ml-auto md:hidden "
          >
            {navIsOpen ? (
              <CancelIcon height="2.5em" />
            ) : (
              <HamburgerIcon height="2.3em" />
            )}
          </button>
        </div>
        {navIsOpen && <NavBar navIsOpen={navIsOpen} />}
      </header>
    </>
  );
}

export default Header;
