import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import HighlightImg from "../assets/gallery/gallery-pic-56.jpeg";

function SchoolAnthem() {
  return (
    <>
      <div>
        <SectionTitle text="School Pledge And Anthems" />

        <div className="p-15 pl-6 pr-6">
          <img src={HighlightImg} alt="" className="mb-5" />
          <h2 className="mb-5 text-[#67B3FF]">The School Pledge</h2>
          <p className="text-gray-800 leading-7">
            I pledge to Fair Havens Group of Schools <br />
            To be a worthy ambassador of thee <br />
            And help build the future of the Nation <br />
            Through my academics <br />
            So help me God
          </p>
        </div>

        <div className="bgBlueLogo pl-4 p-10 pr-4">
          <h2 className="mb-5">School Anthem</h2>
          <p className="leading-7">
            Fair havens group of school seek to excel <br />
            Looking up to God the cretor of all <br />
            For divine guidance, Wisdom and knowledge <br />
            Oh oh Dear God we are in your hands <br />
            Oh oh oh oh oh oh <br />
            The greatest heights in excellence we aspire <br />
            Oh oh oh oh oh oh <br />
            Dear God, grant us our request we plead
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SchoolAnthem;
