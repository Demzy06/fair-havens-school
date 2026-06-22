import Button from "./Button";
import Header from "./Header";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="hey">
      <Header />
      <div
        ref={ref}
        className={`text-center pt-22 pb-22 transition-all duration-700 
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="w-[80%] m-auto mb-6 uppercase whiteColorShadow">
          Fair Havens Schools
        </h1>
        <p className="w-[80%] m-auto mb-6 font-medium text-white ">
          Inspiring Excellence, Building Character, Shaping the Future
        </p>
        <Button
          text="Learn More"
          link="history"
          className="text-black p-7 pt-2 pb-2 bg-white uppercase text-[13px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
