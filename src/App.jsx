import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
// import { Analytics } from "@vercel/analytics/next";

import Homepage from "./pages/Homepage";
import History from "./pages/History";
import FoundersNote from "./pages/FoundersNote";
import SchoolAnthem from "./pages/SchoolAnthem";
import Gallery from "./pages/Gallery";
import NurseryAndPrimary from "./pages/NurseryAndPrimary";
import SecondaryPrograms from "./pages/SecondaryPrograms";
import PrimaryPrograms from "./pages/PrimaryPrograms";
import CrecheNurseryPrograms from "./pages/CrecheNurseryPrograms";
import Tuition from "./pages/Tuition";
import AdmissionProcess from "./pages/AdmissionProcess";
import AdmissionExamsAndResult from "./pages/AdmissionExamsAndResult";
import CoCurricular from "./pages/CoCurricular";
import ContactUs from "./pages/ContactUs.jsx";
import SecondarySchool from "./pages/SecondarySchool";
import FairAtAGlance from "./pages/FairAtAGlance.jsx";
import PrincipalNote from "./pages/PrincipalNote.jsx";
function App() {
  return (
    <>
      {/* <Analytics /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="fair-havens-at-a-glance" element={<FairAtAGlance />} />
          <Route path="history" element={<History />} />
          <Route path="founders-note" element={<FoundersNote />} />
          <Route path="principal-note" element={<PrincipalNote />} />
          <Route path="school-pledge-and-anthem" element={<SchoolAnthem />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="nursery-and-primary" element={<NurseryAndPrimary />} />
          <Route
            path="secondary-and-highschool"
            element={<SecondarySchool />}
          />
          <Route path="secondary-programs" element={<SecondaryPrograms />} />
          <Route path="primary-programs" element={<PrimaryPrograms />} />
          <Route
            path="creche-and-nursery-programs"
            element={<CrecheNurseryPrograms />}
          />
          <Route path="tuition" element={<Tuition />} />
          <Route path="admission-process" element={<AdmissionProcess />} />
          <Route
            path="admission-exams-and-result"
            element={<AdmissionExamsAndResult />}
          />
          <Route
            path="co-curricular-activities-and-clubs"
            element={<CoCurricular />}
          />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
