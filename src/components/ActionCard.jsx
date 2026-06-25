import { Link } from "react-router";
import { useInView } from "react-intersection-observer";

// import useIntersectionObserver from "../hooks/useIntersectionObserver";

function ActionCard({ info }) {
  const { ref: divRef, inView: divIsInVew } = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });
  // const [isVisible, refs] = useIntersectionObserver({
  //   root: null,
  //   threshold: 0.5,
  // });

  return (
    <Link to={info.linkTo}>
      <div
        ref={divRef}
        className={`p-26 text-center mb-5 border-gray border-solid border-2 rounded-xl relative transition-all duration-700 ${
          divIsInVew ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${info.image})`,
            borderRadius: "12px",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F2D52]/40 rounded-xl" />

        {/* Content */}
        <h3 className="w-fit m-auto relative z-1 whiteColorShadow">
          {info.heading}
        </h3>
      </div>
    </Link>
  );
}

export default ActionCard;
