import { Link } from "react-router";
function SubNavigationLinks({ navSubLinks }) {
  console.log(navSubLinks);
  return (
    <ul className="mb-5 w-[92.7%] md:w-50  md:pt-0 md:mb-0 md:absolute md:top-10 md:bg-white text-black md:text-left">
      {navSubLinks.map((navs, i) => (
        <li className="mb-3 md:mb-0 text-[14px] font-light md:uppercase md:w-full md:hover:bg-gray-100 md:pl-4 md:pr-4 md:p-1">
          <Link to={`/${navSubLinks[i].toLowerCase().replaceAll(" ", "-")}`}>
            {navs}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SubNavigationLinks;
