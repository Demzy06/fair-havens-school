import useToTop from "../hooks/useToTop";

import AcademicsContent from "../components/AcademicsContent";
import CrecheAcademicContent from "../components/CrecheAcademicContent";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const crecheContent = {
  header: "Nurturing Beginnings",
  subHeader: "Nurturing Little Hearts and Curious Minds",
  firstParagraph:
    "Our Foundation Stage is specially designed to meet the unique needs of our youngest learners. By combining the strengths of the British, Montessori, and Nigerian curricula, we create engaging learning experiences that inspire curiosity, creativity, and confidence. We offer five carefully structured classes that guide children through their early years and prepare them for future academic success",
  secondParagraph:
    "Our Nursery curriculum is carefully structured to develop essential early learning skills through a wide range of subjects, including Literacy, Numeracy, Knowledge and Understanding of the World, Creative Development, and Physical Development. Every classroom is equipped with interactive learning corners that provide opportunities for exploration, creativity, and collaboration through activities such as reading, role-play, construction, artistic expression, and nature discovery.",
  list: [
    "Crèche",
    "Pre-School One",
    "Pre-School Two",
    "Reception One",
    "Reception Two",
  ],
};

const individualLearning = {
  header: "Tailored Learning",
  subHeader: "Early Learning Programme",
  firstParagraph:
    "At Fair Havens Schools, we believe that no two children learn in exactly the same way. Our one-on-one teaching approach allows our professional Early Years educators to identify and nurture each child's individual learning needs, helping them reach and surpass class expectations. Additionally, our Early Academic Intervention Programme provides targeted support for pupils facing academic challenges, ensuring that no child is left behind.",
  secondParagraph:
    "Our Foundation Stage is led by a team of dedicated and experienced Early Years professionals who bring expertise, care, and creativity to every classroom. Through the effective application of the Montessori philosophy and the use of modern educational resources, we create an environment where children thrive academically and socially. We proudly nurture early readers from the age of three and are committed to raising confident, curious, and exceptional young learners.",
};
function CrecheNurseryPrograms() {
  useToTop();
  return (
    <>
      <div>
        <SectionTitle text="Crèche & Nursery School Progamme" />

        <CrecheAcademicContent
          header={crecheContent.header}
          subHeader={crecheContent.subHeader}
          firstParagraph={crecheContent.firstParagraph}
          secondParagraph={crecheContent.secondParagraph}
          list={crecheContent.list}
        />

        {/* This is the Tailored learning section, had to use the AcademicsContent for it, props dont really match , but it works   */}
        <AcademicsContent
          stage={individualLearning.header}
          classType={individualLearning.subHeader}
          firstParagraph={individualLearning.firstParagraph}
          secondParagraph={individualLearning.secondParagraph}
          background="bgBlueLogo"
        />
      </div>
      <Footer />
    </>
  );
}

export default CrecheNurseryPrograms;
