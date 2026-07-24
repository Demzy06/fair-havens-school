import { Link } from "react-router";
import logo from "../assets/logo_.webp";
function Logo() {
  return (
    <>
      <Link to="/">
        <img src={logo} className="w-[2.7em] h-[2.7em]" />
      </Link>
    </>
  );
}

export default Logo;
