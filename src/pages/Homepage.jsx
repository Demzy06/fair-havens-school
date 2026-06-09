import AboutOurSchool from "../components/AboutOurSchool";
import ActionCardsSection from "../components/ActionCardsSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SchoolStats from "../components/SchoolStats";
function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ActionCardsSection />
        <AboutOurSchool />
        <SchoolStats />
      </main>
    </>
  );
}

export default Homepage;
