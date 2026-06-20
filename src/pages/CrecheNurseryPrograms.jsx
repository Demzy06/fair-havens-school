import { header } from "framer-motion/client";
import AcademicsContent from "../components/AcademicsContent";
import CrecheAcademicContent from "../components/CrecheAcademicContent";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const crecheContent = {
  header: "Nurturing Beginnings",
  subHeader: "Nurturing Little Hearts and Curious Minds",
  firstParagraph:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nobis, facere illo voluptatum dolorum voluptates, mollitia quod saepe illum fugiat nostrum consequatur quaerat at impedit corporis unde consequuntur aliquid possimus",
  secondParagraph:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nobis, facere illo voluptatum dolorum voluptates, mollitia quod saepe illum fugiat nostrum consequatur quaerat at impedit corporis unde consequuntur aliquid possimus.",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit voluptatem dolores magnam pariatur molestias voluptates expedita, tempore, minima esse eligendi dolorem repellat doloribus doloremque, eveniet nostrum laudantium iusto architecto!",
  secondParagraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit voluptatem dolores magnam pariatur molestias voluptates expedita, tempore, minima esse eligendi dolorem repellat doloribus doloremque, eveniet nostrum laudantium iusto architecto!",
};
function CrecheNurseryPrograms() {
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
