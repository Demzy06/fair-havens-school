import Header from "./Header";
import BuildingImg from "../assets/building-2.jpg";
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
      <div className=" uppercase underline w-[94%] m-auto pt-22 pb-22 decoration-white md:pt-63 md:pb-63">
        {/* <div className=" uppercase underline w-[94%] m-auto  decoration-white md:h-[37rem]"> */}
        <h1 className="text-white md:text-[80px]">{text}</h1>
      </div>
    </div>
  );
}

export default SectionTitle;
