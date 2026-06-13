import ActionCard from "./ActionCard";
import Button from "./Button";
const divsInfo = [
  {
    heading: "Schedule A Visit",
    linkTo: "contact-us",
    image: "/src/assets/excitedKids.jpeg",
  },
  {
    heading: "Student Life",
    linkTo: "co-curricular-activities-and-clubs",
    image: "/src/assets/comp-lab-pic.jpeg",
  },
  {
    heading: "Apply Today",
    linkTo: "admission-process",
    image: "/src/assets/classroom-pic.jpeg",
  },
];

function ActionCardsSection() {
  return (
    <section className="actionCardSection pt-12 ">
      <div className="text-center mb-6  pl-4 pr-4">
        <h1 className="text-white mb-14 zo">
          Créche, Nursery, Primary & Secondary
        </h1>
        {/* <div className="flex justify-center w-[90%] h-[22rem] m-auto">
          <img src="/src/assets/image.png" className="w-[80%]" />
        </div> */}
        <img src="/src/assets/image.png" className="w-[80%] m-auto" />
      </div>
      <div className="pr-3 pl-3">
        {divsInfo.map((info) => (
          <ActionCard info={info} key={info.heading} />
        ))}
      </div>
      <div className="pr-2 pl-2">
        <h3 className="text-center w-[95%] m-auto mt-10 mb-12 text-white">
          A place where every child belongs, learns, and thrives
        </h3>
      </div>

      <section className="pt-20 pb-20 pl-8 pr-8 touch text-white">
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
    </section>
  );
}

export default ActionCardsSection;
