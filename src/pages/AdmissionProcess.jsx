import AdmissionProcessContent from "../components/AdmissionProcessContent";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

const admissionSteps = [
  "Purchase our admission form, fill and submit",
  "Admissions Exam",
  "Parent and applicant interview",
];

const step1 = [
  {
    stepNumber: 1,
    step: "Fill and Submit Purchased ",
    forewarn: "Please read the information below carefully",
    todo: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum mollitia laudantium obcaecati culpa iusto placeat voluptates suscipit eos totam alias odit corrupti distinctio, molestias aspernatur qui error, vel vitae minus quis accusamus ipsa explicabo. Necessitatibus!",
  },
];

console.log(step1[0].stepNumber);

const steps = [
  {
    stepNumber: 1,
    step: "Fill and Submit Purchased ",
    forewarn: "Please read the information below carefully",
    todo: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum mollitia laudantium obcaecati culpa iusto placeat voluptates suscipit eos totam alias odit corrupti distinctio, molestias aspernatur qui error, vel vitae minus quis accusamus ipsa explicabo. Necessitatibus!",
  },
  {
    stepNumber: 2,
    step: "Admissions Exam",
    forewarn: "Please read the information below carefully",
    todo: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum mollitia laudantium obcaecati culpa iusto placeat voluptates suscipit eos totam alias odit corrupti distinctio, molestias aspernatur qui error, vel vitae minus quis accusamus ipsa explicabo. Necessitatibus!",
    type: "blue",
  },
  {
    stepNumber: 3,
    step: "Student & Parent Engagement Session",
    forewarn: "Please read the information below carefully",
    todo: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum mollitia laudantium obcaecati culpa iusto placeat voluptates suscipit eos totam alias odit corrupti distinctio, molestias aspernatur qui error, vel vitae minus quis accusamus ipsa explicabo. Necessitatibus!",
  },
];
function AdmissionProcess() {
  return (
    <>
      <section>
        <SectionTitle text="Admission Process" />

        <div className="pt-20 pb-20 text-gray-200 bg-[linear-gradient(rgba(77,166,255,0.85),rgba(77,166,255,0.85)),url(/src/assets/logos-pic.jpg)] bg-contain bg-center bg-repeat">
          <h1 className="w-[80%] text-center m-auto mb-20">
            Opening Our Doors to Bright Young Minds
          </h1>

          <div className="pl-4 pr-4">
            <h1 className="mb-7">Fair Havens School Registration</h1>
            <p>
              We welcome prospective students into a nurturing and academically
              enriching environment. Our admission process is simple,
              transparent, and designed to ensure a smooth transition for every
              child and their family. "Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repudiandae, tempore".
            </p>

            <div className="mt-18 pl-2 pr-2">
              {admissionSteps.map((step, i) => (
                <div className="pt-30 pb-18 pl-7 pr-7 text-center bg-white mb-5">
                  <h1 className="mb-5 text-gray-800 text-5xl">{i + 1}</h1>
                  <p className="text-gray-800 text-xl">{`Step ${i + 1}: ${step}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {steps.map((step) => (
          <AdmissionProcessContent contentObj={step} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default AdmissionProcess;
