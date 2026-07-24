import useToTop from "../hooks/useToTop";

import ContentSection from "../components/ContentSection";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const tuitionDesc = {
  title: "Ensuring your child’s education is supported by safe payment options",
  description:
    "We are dedicated to maintaining transparency and simplicity in all matters concerning fees and levies. Full details on charges and payments are accessible within the school. Our objective is to ensure a clear, smooth, and hassle-free payment process. Kindly find below the key information you need to know:",
  items: [
    "Payment Arrangement Notice: All financial obligations must be settled via bank transfer or cash on or before the commencement of each term. Any changes to fee amounts will be officially communicated to parents and guardians in advance",
    "Fee Payment Options: Payments may be made annually or per term. All fees are payable before resumption and consist of Registration, Tuition, Deposit, Uniform and Caution components.",
    "Registration Fee: A non-refundable registration fee is payable once to complete the admission process and secure your child’s placement in the school.",
    "Caution Fee: A refundable caution fee is required upon enrollment. This fee is subject to the student’s compliance with school rules and regulations, as well as the absence of any damage to school property. It is payable at the point of admission.",
  ],
};
function Tuition() {
  useToTop();
  return (
    <>
      <section>
        <SectionTitle text="School Fees" />
        <ContentSection
          title={tuitionDesc.title}
          description={tuitionDesc.description}
          items={tuitionDesc.items}
          paragraphColor="text-gray-800"
          headingColor="text-gray-800"
        />
      </section>
      <Footer />
    </>
  );
}

export default Tuition;
