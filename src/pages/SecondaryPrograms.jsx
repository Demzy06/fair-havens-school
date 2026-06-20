import AcademicsContent from "../components/AcademicsContent";
import AcademicsSubjectTaught from "../components/AcademicsSubjectTaught";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

const juniorSchoolContent = {
  stage: "Junior Secondary School",
  classType: "JSS1 To JSS3",
  firstParagraph:
    "We deliver a hybrid curriculum that blends both international and national frameworks, giving learners the flexibility to thrive in a dynamic learning environment. With a broad selection of 22 subjects across Science, Technology, Engineering, Arts, and Mathematics (STEAM), students are encouraged to explore their creativity, build essential 21st-century skills, express their ideas confidently, and develop holistically for lifelong success.",
  secondParagraph:
    "We are committed to fostering lifelong learning and the development of critical thinking skills. Our curriculum is thoughtfully designed to support students intellectually, socially, and emotionally, ensuring balanced growth and long-term success.",
};

const juniorSubjectTaught = [
  { subjectName: "Mathematics", bgColor: "#E05C5C" },
  { subjectName: "English", bgColor: "#9E7CC3" },
  { subjectName: "ICT", bgColor: "#555555" },
  { subjectName: "Business Study", bgColor: "#2196A6" },
  { subjectName: "Basic Tech", bgColor: "#E05C5C" },
  { subjectName: "Civic", bgColor: "#9E7CC3" },
  { subjectName: "Yoruba", bgColor: "#555555" },
  { subjectName: "PHE", bgColor: "#2196A6" },
  { subjectName: "Basic Science", bgColor: "#E05C5C" },
  { subjectName: "CRS", bgColor: "#9E7CC3" },
  { subjectName: "IRS", bgColor: "#555555" },
  { subjectName: "Home Economics", bgColor: "#2196A6" },
];

const seniorSchoolContent = {
  stage: "Senior Secondary School",
  classType: "SS1 To SS3",
  firstParagraph:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quibusdam id alias commodi placeat quo voluptates consequuntur optio? Eius, atque sapiente? Voluptatum totam quo quasi illo quidem in cupiditate maxime.",
  secondParagraph:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quibusdam id alias commodi placeat quo voluptates consequuntur optio? Eius, atque sapiente? Voluptatum totam quo quasi illo quidem in cupiditate maxime.",
  thirdParagraph:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quibusdam id alias commodi placeat quo voluptates consequuntur optio? Eius, atque sapiente? Voluptatum totam quo quasi illo quidem in cupiditate maxime.",
};

const seniorSubjectTaught = [
  { subjectName: "Biology", bgColor: "#E07B00" },
  { subjectName: "Physics", bgColor: "#444444" },
  { subjectName: "Chemistry", bgColor: "#2196A6" },
  { subjectName: "Further Mathematics", bgColor: "#444444" },
  { subjectName: "Agriculture", bgColor: "#E07B00" },
  { subjectName: "Physical Education", bgColor: "#2196A6" },
  { subjectName: "Health Education", bgColor: "#444444" },
  { subjectName: "Literature in English", bgColor: "#E07B00" },
  { subjectName: "Geography", bgColor: "#2196A6" },
  { subjectName: "Government", bgColor: "#444444" },
  { subjectName: "CRS", bgColor: "#E07B00" },
  { subjectName: "Economics", bgColor: "#2196A6" },
  { subjectName: "Foods & Nutrition", bgColor: "#444444" },
  { subjectName: "Technical Drawing", bgColor: "#E07B00" },
  { subjectName: "Commerce", bgColor: "#2196A6" },
  { subjectName: "Accounting", bgColor: "#444444" },
];
function SecondaryPrograms() {
  return (
    <>
      <div>
        <SectionTitle text="Secondary School Programme " />
        {/* Junior school content */}
        <AcademicsContent
          stage={juniorSchoolContent.stage}
          classType={juniorSchoolContent.classType}
          firstParagraph={juniorSchoolContent.firstParagraph}
          secondParagraph={juniorSchoolContent.secondParagraph}
          background="academic-content-bg"
        />
        <AcademicsSubjectTaught subjectArr={juniorSubjectTaught} />

        {/* Senior Secondary content */}
        <AcademicsContent
          background="bgBlueLogo"
          stage={seniorSchoolContent.stage}
          classType={seniorSchoolContent.classType}
          firstParagraph={seniorSchoolContent.firstParagraph}
          secondParagraph={seniorSchoolContent.secondParagraph}
          thirdParagraph={seniorSchoolContent.thirdParagraph}
        />
        <AcademicsSubjectTaught subjectArr={seniorSubjectTaught} />
      </div>
      <Footer />
    </>
  );
}

export default SecondaryPrograms;
