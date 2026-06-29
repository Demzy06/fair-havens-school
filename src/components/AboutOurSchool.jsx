import { useEffect } from "react";
import logo from "../assets/logo.jpg";
import AboutOurSchoolCards from "./AboutOurSchoolCards";

const schoolInfoCards = [
  {
    title: "Founders Note",
    path: "founders-note",
    text: "A personal message from our founder, sharing the vision, values, and commitment to providing quality education for every child.",
  },
  // {
  //   title: "Principal Note",
  //   path: "principal-note",
  //   text: "A note from the Managing Director highlighting our goals and dedication to maintaining high standards in teaching, discipline, and student development.",
  // },
  {
    title: "About Us",
    path: "fair-havens-at-a-glance",
    text: "Learn about our school, our values, and our approach to quality education focused on academic excellence, character building, and lifelong learning.",
  },
  {
    title: "Gallery",
    path: "gallery",
    text: "Take a glimpse into our school life through photos capturing events, activities, achievements, and memorable moments shared by our students and staff.",
  },
  {
    title: "Student's Life",
    path: "co-curricular-activities-and-clubs",
    text: "Explore the vibrant experience of life at our school, from academics to extracurricular activities, friendships, and opportunities that help students grow beyond the classroom.",
  },
];

function AboutOurSchool() {
  return (
    <section className="p-8 pl-6 pr-6 bg-smooth inset-0 bg-linear-to-br from-[#4DA6FF]/50 to-white/50 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "800px 800px",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      />
      <div className="md:grid grid-cols-2 gap-4 md:w-[70%] md:mt-5 md:m-auto">
        {schoolInfoCards.map((card, i) => (
          <AboutOurSchoolCards card={card} i={i} />
        ))}
      </div>
    </section>
  );
}

export default AboutOurSchool;
