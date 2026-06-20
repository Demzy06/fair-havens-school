import Button from "./Button";
import Stats from "./Stats";
import BuildingImg from "../assets/building-2.jpg";

function SchoolStats() {
  return (
    <section className="relative pt-8 pb-2">
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
      <div className="pl-6 pr-6 text-white mb-15">
        <h3 className="mb-7">
          Building Tomorrow's Leaders Through Quality Education and Strong
          Values
        </h3>
        <p className="mb-7">
          At Fair Havens School, we are dedicated to providing excellent
          education that nurtures character, discipline, and achievement. Learn
          more about our history, our caring community, and what makes us a
          place where children thrive.
        </p>
        <Button
          text="Find Out More"
          className=" p-3 pr-6 pl-6 bg-white text-black text-[14px]"
        />
      </div>
      <Stats />
    </section>
  );
}

export default SchoolStats;
