import { Link } from "react-router";
function SubNavigationLinks({ navSubLinks }) {
  console.log(navSubLinks);
  return (
    <ul className="mb-5">
      {navSubLinks.map((navs, i) => (
        <li className="mb-3 text-[14px] font-light">
          <Link to={`/${navSubLinks[i].toLowerCase().replaceAll(" ", "-")}`}>
            {navs}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SubNavigationLinks;
