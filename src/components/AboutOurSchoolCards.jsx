import Button from "./Button";
import { useInView } from "react-intersection-observer";

function AboutOurSchoolCards({ card, i }) {
  const { ref: divRef, inView: divInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
      ref={divRef}
      className={`md:p-12 md:pl-10  mb-9 p-6 bg-blue-opacity transition-all duration-700 ${
        divInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      key={i}
    >
      <h3 className="mb-8 text-white md:text-2xl  ">{card.title}</h3>
      <p className="mb-12 leading-6  text-white md:text-[16px] ">{card.text}</p>
      <Button
        text="Learn More"
        link={card.path}
        className="bg-transparent text-white border-1 border-white p-2 pl-5 pr-5 text-[14px]   uppercase"
      />
    </div>
  );
}

export default AboutOurSchoolCards;
