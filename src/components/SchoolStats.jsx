import Button from "./Button";
import Stats from "./Stats";
import BuildingImg from "../assets/building-2.webp";
import { useInView } from "react-intersection-observer";

function SchoolStats() {
  const { ref: headingRef, inView: headingTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: paragraphRef, inView: paragraphTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="relative pt-8 pb-2 md:pt-30 md:pb-30 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BuildingImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F2D52]/40 -z-1" />

      {/* Content */}
      <div className="md:flex md:w-[70%] md:m-auto md:justify-between ">
        <div className="pl-6 pr-6 text-white mb-15 md:mb-0 md:w-[48%] ">
          <h3
            ref={headingRef}
            className={`mb-7 transition-all duration-700 ${headingTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Building Tomorrow's Leaders Through Quality Education and Strong
            Values
          </h3>
          <p
            ref={paragraphRef}
            className={`mb-7 transition-all duration-700 ${paragraphTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            At Fair Havens School, we are dedicated to providing excellent
            education that nurtures character, discipline, and achievement.
            Learn more about our history, our caring community, and what makes
            us a place where children thrive.
          </p>
          <Button
            text="Find Out More"
            className=" p-3 pr-6 pl-6 bg-white text-black text-[14px]"
            link="admission-process"
          />
        </div>

        <div className="md:w-[48%]">
          <Stats />
        </div>
      </div>
    </section>
  );
}

export default SchoolStats;
