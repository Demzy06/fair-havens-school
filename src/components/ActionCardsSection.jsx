import ActionCard from "./ActionCard";

import FlyerImg from "../assets/image.png";
import img1 from "../assets/excitedKids.jpeg";
import img2 from "../assets/comp-lab-pic.jpeg";
import img3 from "../assets/classroom-pic.jpeg";
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
      <div className="pr-2 pl-2 pb-12 ">
        <h3 className="text-center w-[95%] m-auto mt-10 mb-0 text-white">
          A place where every child belongs, learns, and thrives
        </h3>
      </div>
    </section>
  );
}

export default ActionCardsSection;
