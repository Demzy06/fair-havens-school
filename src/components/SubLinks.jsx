import { Link } from "react-router";

function SubLinks({ navSubLinks }) {
  return (
    <ul>
      {navSubLinks.map((navs, i) => (
        <li>
          <Link to={navSubLinks[i].toLowerCase().replaceAll(" ", "-")}>
            {navs}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SubLinks;
