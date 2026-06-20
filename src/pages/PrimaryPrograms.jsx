import AcademicsContent from "../components/AcademicsContent";
import AcademicsSubjectTaught from "../components/AcademicsSubjectTaught";
import AdmissionProcessContent from "../components/AdmissionProcessContent";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
const lowerPrimarySchoolContent = {
  stage: "Lower Primary School",
  classType: "Year 1 To 3",
  firstParagraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae blanditiis nemo autem laboriosam laborum distinctio, error molestias illum porro magnam. Mollitia sunt perferendis illo. Sed tempore corporis nisi velit maiores ducimus minus quaerat atque. Architecto facilis fugiat quas illo. Accusantium dignissimos, quo tempora illum ducimus sunt quibusdam sit eum!",
  secondParagraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae blanditiis nemo autem laboriosam laborum distinctio, error molestias illum porro magnam. Mollitia sunt perferendis illo. Sed tempore corporis nisi velit maiores ducimus minus quaerat atque.",
};

const lowerPrimarySubjectTaught = [
  { subjectName: "Quantitative Reasoning", bgColor: "#E05C5C" },
  { subjectName: "French", bgColor: "#9E7CC3" },
  { subjectName: "​Fine Art", bgColor: "#555555" },
  { subjectName: "​Diction", bgColor: "#2196A6" },
  { subjectName: "Verbal Reasoning", bgColor: "#E05C5C" },
  { subjectName: "Home Economics", bgColor: "#9E7CC3" },
  { subjectName: "CRK", bgColor: "#555555" },
  { subjectName: "Social Studies", bgColor: "#2196A6" },
  { subjectName: "ICT", bgColor: "#E05C5C" },
  { subjectName: "​Yoruba", bgColor: "#9E7CC3" },
];

const upperPrimarySchoolContent = {
  stage: "Upper Primary School",
  classType: "Year 4 To 6",
  firstParagraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae blanditiis nemo autem laboriosam laborum distinctio, error molestias illum porro magnam. Mollitia sunt perferendis illo. Sed tempore corporis nisi velit maiores ducimus minus quaerat atque. Architecto facilis fugiat quas illo. Accusantium dignissimos, quo tempora illum ducimus sunt quibusdam sit eum!",
  secondParagraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae blanditiis nemo autem laboriosam laborum distinctio, error molestias illum porro magnam. Mollitia sunt perferendis illo. Sed tempore corporis nisi velit maiores ducimus minus quaerat atque.",
};

const upperPrimarySubjectTaught = [
  { subjectName: "English", bgColor: "#E05C5C" },
  { subjectName: "Mathematics", bgColor: "#9E7CC3" },
  { subjectName: "​Creative Art", bgColor: "#555555" },
  { subjectName: "Agricultural Science", bgColor: "#2196A6" },
  { subjectName: "Verbal Reasoning", bgColor: "#E05C5C" },
  { subjectName: "Home Economics", bgColor: "#9E7CC3" },
  { subjectName: "CRK", bgColor: "#555555" },
  { subjectName: "Social Studies", bgColor: "#2196A6" },
  { subjectName: "ICT", bgColor: "#E05C5C" },
  { subjectName: "​Yoruba", bgColor: "#9E7CC3" },
  { subjectName: "Music", bgColor: "#555555" },
  { subjectName: "Handwriting", bgColor: "#2196A6" },
];

function PrimaryPrograms() {
  return (
    <>
      <div>
        <SectionTitle text="Primary School Programme" />

        {/* Lower Primary school */}
        <AcademicsContent
          stage={lowerPrimarySchoolContent.stage}
          classType={lowerPrimarySchoolContent.classType}
          firstParagraph={lowerPrimarySchoolContent.firstParagraph}
          secondParagraph={lowerPrimarySchoolContent.secondParagraph}
          background="academic-content-bg"
        />
        <AcademicsSubjectTaught subjectArr={lowerPrimarySubjectTaught} />

        {/* Upper primary school */}
        <AcademicsContent
          stage={upperPrimarySchoolContent.stage}
          classType={upperPrimarySchoolContent.classType}
          firstParagraph={upperPrimarySchoolContent.firstParagraph}
          secondParagraph={upperPrimarySchoolContent.secondParagraph}
          background="bgBlueLogo"
        />
        <AcademicsSubjectTaught subjectArr={upperPrimarySubjectTaught} />
      </div>
      <Footer />
    </>
  );
}

export default PrimaryPrograms;
