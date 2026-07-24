import useToTop from "../hooks/useToTop";

import AcademicsContent from "../components/AcademicsContent";
import AcademicsSubjectTaught from "../components/AcademicsSubjectTaught";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

const lowerPrimarySchoolContent = {
  stage: "Lower Primary School",
  classType: "Year 1 To 3",
  firstParagraph:
    "At Fair Havens Schools, our Lower Primary School is dedicated to building strong foundations for lifelong learning. We provide an engaging and supportive environment where pupils are encouraged to explore, discover, and excel. Through an integrated curriculum and diverse learning experiences, we nurture confident and respectful learners who are equipped with the knowledge, skills, and values necessary to succeed academically and make meaningful contributions to society.",
  secondParagraph:
    "Science and Technology are integral to our Lower Primary curriculum, inspiring curiosity, creativity, and hands on learning. Through our STEAMS approach, which integrates Science, Technology, Engineering, Arts, Mathematics, and Sports, we equip pupils with essential skills while encouraging innovation, problem solving, and a love for discovery.",
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
    "In our Upper Primary School (Years 4, 5, and 6), we provide an integrated curriculum that combines the best of the Nigerian and British educational systems. We focus on the holistic development of every child, equipping pupils with essential 21st century skills while nurturing effective communication, self discipline, and respect. Through a wide range of academic and co curricular opportunities, we encourage teamwork, creativity, leadership, and personal growth.",
  secondParagraph:
    "Science, Technology, Engineering, Arts, Mathematics, and Sports (STEAMS) play a vital role in our Upper Primary curriculum, fostering critical thinking, creativity, and innovation. Through practical activities and hands on learning experiences, we provide engaging opportunities that inspire pupils to explore, discover, and apply their knowledge with confidence.",
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
  console.log(upperPrimarySubjectTaught);
  useToTop();
  return (
    <>
      <div>
        <SectionTitle text="Primary School Programme" />

        {/* Lower Primary school */}
        <div className="md:flex md:bg-[#F7F9F6] ">
          <div className="flex-7">
            <AcademicsContent
              stage={lowerPrimarySchoolContent.stage}
              classType={lowerPrimarySchoolContent.classType}
              firstParagraph={lowerPrimarySchoolContent.firstParagraph}
              secondParagraph={lowerPrimarySchoolContent.secondParagraph}
              background="academic-content-bg"
              lowerPrimarySubjectTaught={lowerPrimarySubjectTaught}
            />
          </div>
          <div className="flex-3 md:m-auto md:pr-30 md:pl-5 ">
            <AcademicsSubjectTaught subjectArr={lowerPrimarySubjectTaught} />
          </div>
        </div>

        {/* Upper primary school */}
        <div className="md:flex bgBlueLogo ">
          <div className="flex-7">
            <AcademicsContent
              stage={upperPrimarySchoolContent.stage}
              classType={upperPrimarySchoolContent.classType}
              firstParagraph={upperPrimarySchoolContent.firstParagraph}
              secondParagraph={upperPrimarySchoolContent.secondParagraph}
              background="bgBlueLogo"
            />
          </div>
          <div className="flex-3 md:m-auto md:pr-30 md:pl-5 rounded-20">
            <AcademicsSubjectTaught subjectArr={upperPrimarySubjectTaught} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrimaryPrograms;
