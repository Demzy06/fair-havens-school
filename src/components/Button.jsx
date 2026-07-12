import { Link } from "react-router";
import { useInView } from "react-intersection-observer";

function Button({ text, className, link }) {
  const { ref: btnRef, inView: btnIsInVew } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Link to={link}>
      <button
        ref={btnRef}
        className={`cursor-pointer ${className} transition-all duration-700 ${
          btnIsInVew ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
