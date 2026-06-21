import Button from "./Button";
import ClassroomImg from "../assets/building-3.jpg";

function CallToActionSection() {
  return (
    <section
      className="pt-20 pb-20 pl-8 pr-8 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 45, 82, 0.4)), url(${ClassroomImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h2 className="mb-9">Building That Spark</h2>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          ab totam quasi reprehenderit, expedita maxime culpa dolorem, sunt
          quidem, ex doloribus eaque incidunt nostrum vero magni! Suscipit ex ad
          sunt repellat dolorem labore minima et consequuntur eveniet soluta,
          architecto blanditiis rerum minus rem provident error. Harum veritatis
          ab sed adipisci?
        </p>
        <Button
          text="Apply Today"
          className="bg-white  p-2 pl-5 pr-5 text-black mt-6 uppercase text-[13px]"
          link="/contact"
        />
      </div>
    </section>
  );
}

export default CallToActionSection;
