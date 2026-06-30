import Button from "./Button";
import Header from "./Header";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="hey md:h-110">
      <Header />
      <div
        ref={ref}
        className={`text-center pt-22 pb-22 transition-all duration-700 md:h-full md:flex md:flex-col md:justify-center md:pt-35
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div>
          <h1 className="w-[80%] m-auto mb-1.5 uppercase whiteColorShadow md:text-7xl">
            Fair Havens Schools
          </h1>
          <h3 className="upppercase mb-5 text-white font-bold">(Govt Appr)</h3>
          <p className="w-[80%] m-auto mb-6 font-medium text-white md:text-2xl ">
            Inspiring Excellence, Building Character, Shaping the Future
          </p>
          <Button
            text="Learn More"
            link="fair-havens-at-a-glance"
            className="text-black p-7 pt-2 pb-2 bg-white uppercase text-[13px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
