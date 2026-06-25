import AboutOurSchool from "../components/AboutOurSchool";
import ActionCardsSection from "../components/ActionCardsSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import SchoolStats from "../components/SchoolStats";
import CallToActionSection from "../components/CallToActionSection";

function Homepage() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <main>
        <ActionCardsSection />
        <CallToActionSection />
        <AboutOurSchool />
        <SchoolStats />
        <Footer />
      </main>
    </>
  );
}

export default Homepage;
