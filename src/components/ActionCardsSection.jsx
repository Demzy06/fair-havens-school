import ActionCard from "./ActionCard";
import { useInView } from "react-intersection-observer";

import FlyerImg from "../assets/image.webp";
import img1 from "../assets/excitedKids.webp";
import img2 from "../assets/comp-lab-pic.webp";
import img3 from "../assets/classroom-pic.webp";

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
        <div className="w-full">
          <img
            src={FlyerImg}
            className={` md:w-[46%] md:h-[50rem] w-[80%] m-auto transition-all duration-700 ${
              imgIsInVew
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            ref={imgRef}
          />
        </div>
      </div>
      <div className="pr-3 pl-3 md:flex md:justify-between md:w-fit md:m-auto gap-2 md:mt-30">
        {divsInfo.map((info) => (
          <ActionCard info={info} key={info.heading} />
        ))}
      </div>
      <div className={`"pr-2 pl-2 pb-12 md:pb-40`}>
        <h3
          ref={divRef}
          className={`text-center w-[95%] m-auto mt-10 mb-0 text-white transition-all duration-700 md:text-[20px] ${
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
