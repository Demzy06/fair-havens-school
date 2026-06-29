import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

import VisionStatementImg from "../assets/vision-pic.jpeg";
import MissionStatementImg from "../assets/mission-pic.jpeg";
import SchoolStatement from "../components/SchoolStatement";
import useToTop from "../hooks/useToTop";

const coreValues = [
  "Leadership",
  "Integrity",
  "Discipline",
  "Respect",
  "Excellence",
  "Creativity",
];

const statement = [
  {
    vissionStatement:
      "Our vision is to be a leading institution of excellence, providing quality all round education that nurtures every child to realise their full potential and become confident, responsible, and successful global citizens.",
    headerText: "Our Vision Statement",
  },
  {
    missionStatement:
      "Our mission is to provide a safe, nurturing, and stimulating learning environment where every child receives quality all round education, develops strong moral values, and is empowered to achieve academic excellence and lifelong success.",
    headerText: "Our Mission Statement",
  },
];

function FairAtAGlance() {
  useToTop();
  return (
    <>
      <div>
        <SectionTitle text="Fair Havens At A Glance" />
        <div className="xoooo">
          <div className="bgBlueLogo ">
            <h1 className="text-center pt-20 pb-0 text-[36px] font-bold md:text-[48px] md:font-bold">
              Igniting Minds, Inspiring Futures
            </h1>
            <div className="pl-5 pr-5 p-30 pb-35 ">
              <span className="md:flex md:pt-15 md:pb-18 justify-between md:w-[70%] md:m-auto">
                <h2 className="mb-8 text[36px] font-bold md:w-[40%] md:text-[48px] md:pt-2">
                  Together, Building a Brighter Future for Your Child
                </h2>
                <p className="md:w-[50%] md:text-[17px]">
                  At our school, every child is at the centre of everything we
                  do. We are committed to creating a nurturing environment where
                  learners are encouraged to discover their strengths, develop
                  their talents, and grow into confident and responsible
                  individuals. Through personalised learning and holistic
                  development, we equip every child with the skills needed to
                  succeed both academically and personally.
                </p>
              </span>
            </div>
          </div>

          <section className="pt-10 pb-13 pl-6 pr-5  ">
            <div className="md:flex md:pt-15 md:pb-18 justify-between md:w-[70%] md:m-auto">
              <h1 className="text-[36px] font-bold mb-5 text-[#67B3FF] md:w-[40%] md:m-auto md:text-[48px]">
                Core Values
              </h1>
              <ul className="list-disc pl-10 text-gray-800 md:w-[50%] leading-7.5">
                {coreValues.map((values) => (
                  <li>{values}</li>
                ))}
              </ul>
            </div>
          </section>
          <SchoolStatement
            img={VisionStatementImg}
            alt="student-pic"
            statement={statement[0].vissionStatement}
            headerText={statement[0].headerText}
            background="bgBlueLogo"
          />
          <SchoolStatement
            img={MissionStatementImg}
            alt="student-pic"
            statement={statement[1].missionStatement}
            headerText={statement[1].headerText}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FairAtAGlance;
