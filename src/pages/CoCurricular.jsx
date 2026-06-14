import ContentSection from "../components/ContentSection";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const activityClub = {
  clubType: "Activity Clubs",
  statement:
    "We believe that a truly exceptional education extends beyond the classroom. Our clubs and extracurricular activities encourage students to explore their interests, develop new talents, strengthen leadership skills, and build meaningful friendships in a fun and supportive environment.",
  clubActivities: ["Cultural Club", "Board Games", "Dance and Drama", "Music"],
};

const subjectBasedClub = {
  clubType: "Subject-Based Clubs",
  statement:
    "Learning doesn't stop when the lesson ends. Our academic clubs encourage students to explore new ideas, strengthen their understanding of key subjects, and discover exciting opportunities to apply their knowledge in meaningful and enjoyable ways.",
  clubActivities: [
    "JETS Club",
    "Press Club",
    "Art Club",
    "Geographical Society",
  ],
};
function CoCurricular() {
  return (
    <>
      <section>
        <SectionTitle text="Co-curricular Activities & Clubs" />

        <ContentSection
          headerText="Discover, Learn, and Thrive Beyond the Classroom"
          title={activityClub.clubType}
          description={activityClub.statement}
          items={activityClub.clubActivities}
          className="text-gray-200 bg-[linear-gradient(rgba(77,166,255,0.85),rgba(77,166,255,0.85)),url(/src/assets/logos-pic.jpg)] bg-contain bg-center bg-repeat"
        />

        <ContentSection
          title={subjectBasedClub.clubType}
          description={subjectBasedClub.statement}
          items={subjectBasedClub.clubActivities}
          headingColor="text-[#67B3FF]"
          paragraphColor="text-gray-800"
        />
      </section>
      <Footer />
    </>
  );
}

export default CoCurricular;
