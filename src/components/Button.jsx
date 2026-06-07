import { Link } from "react-router";

function Button({ text, className, link }) {
  return (
    <Link to={link}>
      <button className={`${className}`}>{text}</button>
    </Link>
  );
}

export default Button;
