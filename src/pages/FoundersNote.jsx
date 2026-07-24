import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

import FounderImg from "../assets/founder-img.webp";
import useToTop from "../hooks/useToTop";
function FoundersNote() {
  useToTop();
  return (
    <>
      <section>
        <SectionTitle text="Founder's Note" />

        <div className="bgBlueLogo pl-5 pr-5 pt-30 pb-20 md:pl-60 md:pr-60">
          <div className="mb-7 md:flex">
            <div className="p-2 md:pt-3.5 md:pb-3.5 md:p-2.5  bg-black mb-40 md:w-[48%] md:h-dvh md:mb-0">
              <img
                src={FounderImg}
                alt="founder-pic"
                className="border md:h-full"
              />
            </div>
            <div className="md:w-[50%] md:mt-50 md:pl-15">
              <h2 className="mb-7">Greetings from Mr Dada Titus Sunday</h2>
              <p className="text-[21px] font-medium">Founder's Note</p>
            </div>
          </div>

          <div>
            <h4 className="text-[21px] mb-6 md:text-[24px] md:mb-9">
              Welcome to Fair Haven Schools!
            </h4>
            <p className="text-[16px] leading-6 mb-7 md:mb-8">
              I am so thrilled to welcome you to Fair Haven Schools, where
              dreams are cultivated,character is developed and excellence
              becomes a way of life. Fair Haven Schools was founded on 16th
              September 2002 at Ladugba Estate, Ita Oluwo,Ogijo, Ogun State with
              the aim of creating an environment for each child to discover his
              potentials and become a responsible leader of tomorrow; an
              environment where children can be safe, inspired and academically
              enriched.
            </p>
            <p className="text-[16px] leading-6 mb-3 md:mb-8 ">
              We have been dedicated to whole-person learning for more than 20
              years.We feel that academic success is only one way to measure
              success and our students' values and character are another. This
              is evident in our motto 'Seek to Excel' to inspire all learners to
              always strive to improve, to take advantage of opportunities and
              to aim for greatness in a humble and determined manner.
            </p>

            <span>
              <p className="mb-2.5">
                Our core values are H.E.A.R.T. and are at the heart of all we
                do:
              </p>
              <ul className="list-disc pl-9">
                <li>Honesty-making lives based on integrity and truth.</li>
                <li>
                  Empathy-developing kindness, respect and compassion for
                  others.
                </li>
                <li>
                  Academic Excellence-helping students to excel at their best.
                </li>
                <li>
                  Resilience-to have the courage to face challenges and learn
                  from all experiences.
                </li>
                <li>Teamwork-encouraging collaboration, unity and success.</li>
              </ul>
            </span>

            <p className="mt-7">
              Thanks to all of you, our parents, staff, alumni and community,
              for a role in our journey.Your support, trust and partnership have
              made this vision, which started in 2002, a successful institution
              that continues to make a difference in lives.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FoundersNote;
