import Button from "./Button";
import Header from "./Header";

function HeroSection() {
  return (
    <section className="hey">
      <Header />
      <div className="text-center pt-22 pb-22 ">
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
