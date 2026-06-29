import useToTop from "../hooks/useToTop";

import AdmissionProcessContent from "../components/AdmissionProcessContent";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

const admissionSteps = [
  "Purchase our admission form, fill and submit",
  "Admissions Exam",
  "Parent and applicant interview",
];

const steps = [
  {
    stepNumber: 1,
    step: "Fill and Submit Purchased ",
    forewarn: "Please read the information below carefully",
    todo: " To begin the admission process, a payment of 10,000 is required for the purchase of the Admission Form. Parents or guardians are kindly requested to complete the form carefully, ensuring that all information provided is accurate and up to date to enable us to maintain proper records for each applicant.",
  },
  {
    stepNumber: 2,
    step: "Admissions Exam",
    forewarn: "Please read the information below carefully",
    todo: "All applicants, accompanied by their parents or guardians, will be invited to participate in a comprehensive entrance assessment. This engaging evaluation enables us to gain a holistic understanding of each child's abilities, strengths, and potential.",
    type: "blue",
  },
  {
    stepNumber: 3,
    step: "Student & Parent Engagement Session",
    forewarn: "Please read the information below carefully",
    todo: "Following the successful completion of the entrance assessment, applicants and their parents or guardians will be invited for an interview. This interactive session provides an opportunity for us to learn more about the applicant, understand their educational aspirations, and ensure that our learning environment is the right fit for the family. We are committed to maintaining a transparent, fair, and thorough admissions process.",
  },
];
function AdmissionProcess() {
  useToTop();
  return (
    <>
      <section>
        <SectionTitle text="Admission Process" />

        <div className="pt-20 pb-20 text-gray-200 bg-[linear-gradient(rgba(77,166,255,0.85),rgba(77,166,255,0.85)),url(/src/assets/logos-pic.jpg)] bg-contain bg-center bg-repeat md:pl-60 md:pr-60">
          <h1 className="w-[80%] text-center m-auto mb-20">
            Opening Our Doors to Bright Young Minds
          </h1>

          <div className="pl-4 pr-4">
            <div className="md:flex ">
              <h1 className="mb-7 md:flex-1 md:text-[48px]">
                Fair Havens School Registration
              </h1>
              <p className="md:flex-1">
                We welcome prospective students into a nurturing and
                academically enriching environment. Our admission process is
                simple, transparent, and designed to ensure a smooth transition
                for every child and their family. If you have any questions you
                can call us at <span className="text-black">08023182828.</span>
              </p>
            </div>

            <div className="mt-18 pl-2 pr-2 md:flex md:gap-4">
              {admissionSteps.map((step, i) => (
                <div className="pt-30 pb-18 pl-7 pr-7 text-center bg-white mb-5 md:h-90 md:w-90 md:pl-3 md:pr-3">
                  <h1 className="mb-5 text-gray-800 text-5xl">{i + 1}</h1>
                  <p className="text-gray-800 text-xl">{`Step ${i + 1}: ${step}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {steps.map((step) => (
            <AdmissionProcessContent contentObj={step} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdmissionProcess;
