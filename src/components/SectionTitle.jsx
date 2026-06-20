import Header from "./Header";
import BuildingImg from "../assets/building-5.jpeg";
function SectionTitle({ text }) {
  return (
    <div
      className="text-center "
      style={{
        backgroundImage: ` linear-gradient(rgba(77, 166, 255, 0.4) 60%, rgba(77, 166, 255, 1) 75%),url(${BuildingImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className=" uppercase underline w-[94%] m-auto pt-22 pb-22 decoration-white ">
        <h1 className="text-white">{text}</h1>
      </div>
    </div>
  );
}

export default SectionTitle;
