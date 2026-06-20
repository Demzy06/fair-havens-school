import Header from "./Header";
import BuildingImg from "../assets/building-5.jpeg";
function SectionTitle({ text }) {
  return (
    <div
      className="text-center "
      style={{
        backgroundImage: ` linear-gradient(rgba(77, 166, 255, 0.4) 50%, rgba(77, 166, 255, 1) 85%),url(${BuildingImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className=" uppercase underline w-[94%] m-auto pt-18 pb-15 decoration-white h-56">
        <h1 className="text-white">{text}</h1>
      </div>
    </div>
  );
}

export default SectionTitle;
