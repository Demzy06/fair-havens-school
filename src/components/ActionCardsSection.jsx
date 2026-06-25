import ActionCard from "./ActionCard";
// import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useInView } from "react-intersection-observer";

import FlyerImg from "../assets/image.png";
import img1 from "../assets/excitedKids.jpeg";
import img2 from "../assets/comp-lab-pic.jpeg";
import img3 from "../assets/classroom-pic.jpeg";

const divsInfo = [
  {
    heading: "Schedule A Visit",
    linkTo: "contact-us",
    image: img1,
  },
  {
    heading: "Student Life",
    linkTo: "co-curricular-activities-and-clubs",
    image: img2,
  },
  {
    heading: "Apply Today",
    linkTo: "admission-process",
    image: img3,
  },
];

function ActionCardsSection() {
  const { ref: headingRef, inView: headingTextIsInVew } = useInView({
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgIsInVew } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: divRef, inView: divIsInVew } = useInView({
    root: null,
    threshold: 0.9,
    triggerOnce: true,
  });

  // const [isVisible, refs] = useIntersectionObserver({
  //   root: null,
  //   threshold: 0.5,
  // });
  return (
    <section className="actionCardSection pt-12 ">
      <div className="text-center mb-6  pl-4 pr-4">
        <h1
          className={`text-white mb-14 whiteColorShadow transition-all duration-700 ${
            headingTextIsInVew
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          ref={headingRef}
        >
          Créche, Nursery, Primary & Secondary
        </h1>
        <img
          src={FlyerImg}
          className={`w-[80%] m-auto transition-all duration-700 ${
            imgIsInVew
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          ref={imgRef}
        />
      </div>
      <div className="pr-3 pl-3">
        {divsInfo.map((info) => (
          <ActionCard info={info} key={info.heading} />
        ))}
      </div>
      <div className={`"pr-2 pl-2 pb-12 `}>
        <h3
          ref={divRef}
          className={`text-center w-[95%] m-auto mt-10 mb-0 text-white transition-all duration-700 ${
            divIsInVew
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          A place where every child belongs, learns, and thrives
        </h3>
      </div>
    </section>
  );
}

export default ActionCardsSection;
