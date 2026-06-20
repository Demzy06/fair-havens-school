import ActionCard from "./ActionCard";
import Button from "./Button";

import FlyerImg from "../assets/image.png";
import img1 from "../assets/excitedKids.jpeg";
import img2 from "../assets/comp-lab-pic.jpeg";
import img3 from "../assets/classroom-pic.jpeg";
import ClassroomImg from "../assets/classroom-pic.jpeg";
// import ClassroomImg from "../assets/building-3.jpg";
const divsInfo = [
  {
    heading: "Schedule A Visit",
    linkTo: "contact-us",
    image: img1,
  },
  {
    heading: "Student Life",
    linkTo: "co-curricular-activities-and-clubs",
    image: img2,
  },
  {
    heading: "Apply Today",
    linkTo: "admission-process",
    image: img3,
  },
];

function ActionCardsSection() {
  return (
    <>
      <section className="actionCardSection pt-12 ">
        <div className="text-center mb-6  pl-4 pr-4">
          <h1 className="text-white mb-14 whiteColorShadow">
            Créche, Nursery, Primary & Secondary
          </h1>
          <img src={FlyerImg} className="w-[80%] m-auto" />
        </div>
        <div className="pr-3 pl-3">
          {divsInfo.map((info) => (
            <ActionCard info={info} key={info.heading} />
          ))}
        </div>
        <div className="pr-2 pl-2 pb-10">
          <h3 className="text-center w-[95%] m-auto mt-10 mb-0 text-white">
            A place where every child belongs, learns, and thrives
          </h3>
        </div>
      </section>

      <section
        className="pt-20 pb-20 pl-8 pr-8 text-white"
        style={{
          backgroundImage: `linear-gradient(rgb(15, 45, 82, 0.4)), url(${ClassroomImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: "1000",
        }}
      >
        <div>
          <h2 className="mb-9">Building That Spark</h2>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            ab totam quasi reprehenderit, expedita maxime culpa dolorem, sunt
            quidem, ex doloribus eaque incidunt nostrum vero magni! Suscipit ex
            ad sunt repellat dolorem labore minima et consequuntur eveniet
            soluta, architecto blanditiis rerum minus rem provident error. Harum
            veritatis ab sed adipisci?
          </p>
          <Button />
        </div>
      </section>
    </>
  );
}

export default ActionCardsSection;
