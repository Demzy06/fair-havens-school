import Button from "./Button";
import ClassroomImg from "../assets/building-3.jpg";
import { useInView } from "react-intersection-observer";

function CallToActionSection() {
  const { ref: headingRef, inView: headingTextIsInVew } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphTextIsInVew } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="pt-20 pb-20 pl-8 pr-8 text-white"
      style={{
        backgroundImage: `linear-gradient( rgba(15, 45, 82, 0.4),rgba(15, 45, 82, 0.4)), url(${ClassroomImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h2
          ref={headingRef}
          className={`mb-9 transition-all duration-700 ${
            headingTextIsInVew
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Building That Spark
        </h2>
        <p
          ref={paragraphRef}
          className={`text-[15px] font-normal leading-6.5 transition-all duration-700 mb-2 ${
            paragraphTextIsInVew
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          We believe that within every child lies a unique spark waiting to be
          discovered and nurtured. Through inspiring education, caring guidance,
          and meaningful experiences, we ignite curiosity, foster creativity,
          and cultivate a lifelong love for learning
        </p>
        <p
          ref={paragraphRef}
          className={`text-[15px] font-normal leading-6.5 transition-all duration-900 ${
            paragraphTextIsInVew
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Our mission is to fan that spark into a bright flame of knowledge,
          confidence, and purpose empowering our students to dream boldly, think
          critically, and become compassionate leaders who will shape a better
          future for their communities and the world.
        </p>
        <Button
          text="Apply Today"
          className={`bg-white p-2 pl-5 pr-5 text-black mt-6 uppercase text-[13px]`}
          link="/contact"
        />
      </div>
    </section>
  );
}

export default CallToActionSection;
