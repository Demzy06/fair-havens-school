import NavBar from "./NavBar";
import Logo from "./Logo";
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
        className={`${!navIsOpen ? `${isSticky && "fixed bg-white transition-all duration-300 ease-in-out"}` : "fixed"} absolute pr-0 pl-0 w-full left-0 z-100 md:flex md:justify-between md:items-center md:pt-3.5 md:pb-3.5 md:pl-10 md:pr-10 `}
      >
        <div
          className={`flex justify-between pr-2 pl-2 p-1 ${navIsOpen ? "bg-white" : ""} md:justify-between md:items-center `}
        >
          {navIsOpen ? "" : <Logo />}

          <button
            onClick={() => setNavISOpen(!navIsOpen)}
            className="ml-auto md:hidden "
          >
            {navIsOpen ? (
              <CancelIcon height="2.5em" />
            ) : (
              <HamburgerIcon
                height="2.3em"
                style={isSticky ? { color: "black" } : { color: "#fff" }}
              />
            )}
          </button>
        </div>
        <NavBar navIsOpen={navIsOpen} isSticky={isSticky} />
      </header>
    </>
  );
}

export default Header;
