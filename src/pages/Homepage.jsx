import AboutOurSchool from "../components/AboutOurSchool";
import ActionCardsSection from "../components/ActionCardsSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ActionCardsSection />
        <AboutOurSchool />
      </main>
    </>
  );
}

export default Homepage;
